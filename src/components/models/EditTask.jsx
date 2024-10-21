import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Autocomplete, TextField } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {Button} from '@mui/material';
import keycloakInstance from '../../keycloak/keycloak.js';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: '#121212',
  border: 'none',
  boxShadow: 24,
  p: 3,
  borderRadius: '10px',
  color: '#fff'
};

const tags = ["Angular", "React", "Vuejs", "Spring Boot", "Node js", "Django"]


const EditTask = ({ open, handleClose, taskId }) => {
    const[task, setTask] = useState();

    const [formData, setformData] = useState(
    {
        title: "",
        image:"",
        description: "",
        tags:[],
        deadline: new Date()
    });

    const[selectedTags, setSelectedTags] = useState([]);

    useEffect(() => {
        const token = keycloakInstance.getToken();
        console.log(taskId);
        const fetchTaskData = async () => {
            try {
            const response = await axios.get(`http://localhost:5002/api/tasks/${taskId}`,
            {
                headers: {
                  'Authorization': `Bearer ${token}`, 
                },
              }
            );
            console.log(response);
            if (response.status === 200 || response.status === 201) {
                const taskData = response.data;
                
                // Update formData with the fetched task data
                setformData({
                title: taskData.title,
                image: taskData.image || "",
                description: taskData.description,
                tags: taskData.tags || [],
                deadline: new Date(taskData.deadline),
                });
                
                // Set selected tags if necessary
                setSelectedTags(taskData.tags || []);
                
                // Set task state with the full response data if you want to use it elsewhere
                setTask(taskData);
            }
            } catch (e) {
            console.error('Error fetching task data:', e);
            }
        };

        if (open) {
            fetchTaskData();
        }
        console.log(formData);
    }, [open, taskId]); 

    const handleChange = (e) => {
        const {name, value} = e.target;
        setformData({
            ...formData,
            [name]: value,
        });
    }

    const handleTagChange = (event, value) => {
        setSelectedTags(value);
    }

    const handleDeadlineChange = (date) => {
        setformData({
            ...formData,
            deadline:date
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { deadline } = formData;
        formData.deadline = formatDate(deadline);
        formData.tags = selectedTags;
        const token = keycloakInstance.getToken();
        try {
            const response = await axios.post(
                "http://localhost:5000/api/tasks", 
                formData, 
                {
                headers: {
                    'Authorization': `Bearer ${token}`, 
                },
                }
            );      
            if (response.status === 200) {
                MySwal.fire({
                title: 'Success!',
                text: 'Task has been created successfully.',
                icon: 'success',
                confirmButtonText: 'OK'
                });
            }
            } catch (error) {
            console.log(error);
            MySwal.fire({
                title: 'Error!',
                text: 'There was an issue creating the task. Please try again.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    
        console.log(formData);
        handleClose();
    };

    const formatDate = (input) => {
        let {
            $y: year,
            $M: month,
            $D: day,
            $H: hours,
            $m: minutes,
            $s: seconds,
            $ms: milliseconds,
        } = input;

        const date = new Date(year, month, day, hours, minutes, seconds, milliseconds);
        const formattedDate = date.toISOString();
        
        return formattedDate;
    }
    
    return (
        <div>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
            <Box sx={style} className='bg-gray-800 rounded'>
                <Typography 
                    id="modal-modal-title" 
                    variant="h6" 
                    component="h2" 
                    sx={{
                    borderBottom: '2px solid #64748b', 
                    pb: 1, 
                    mb: 2,
                    fontFamily: 'Poppins, sans-serif'
                    }}>
                    Edit Task
                </Typography>
                <form>
                    <Box mb={2}>
                        <TextField
                            label="Title"
                            fullWidth
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                        />
                    </Box>
                    <Box mb={2}>
                        <TextField
                            label="Description"
                            fullWidth
                            name="description"
                            rows={10}
                            value={formData.description}
                            onChange={handleChange}
                        />
                    </Box>
                    <Box mb={2}>
                        <Autocomplete 
                            multiple
                            id="multiple-limit-tags"
                            onChange={handleTagChange}
                            options={tags} 
                            getOptionLabel={(option) => option}
                            renderInput={(params) => 
                                <TextField 
                                    label="Tags"
                                    fullWidth
                                    {...params}
                                />
                            }
                        />
                    </Box>    
                    <Box mb={2}>
                        <TextField
                            label="Image"
                            fullWidth
                            name="image"
                            value={formData.image}
                            onChange={handleChange}
                        />
                    </Box>
                    <Box mb={2}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker']}>
                                <DatePicker 
                                    onChange={handleDeadlineChange}
                                    label="Deadline" 
                                    className='w-full'
                                    renderInput = {(params) => <TextField {...params}/>}
                                />
                            </DemoContainer>
                        </LocalizationProvider>
                    </Box>
                    <Box>
                        <Button
                            type="submit"
                            fullWidth
                            className="customButton"
                            onClick={handleSubmit}
                            variant="contained"
                            sx={{
                                backgroundColor: 'primary.main',
                                color: 'white',
                                '&:hover': {
                                    backgroundColor: 'primary.dark',
                                },
                            }}
                        >
                            Update
                        </Button>
                    </Box>
                </form>
            </Box>
        </Modal>
        </div>
    );
}

export default EditTask;
