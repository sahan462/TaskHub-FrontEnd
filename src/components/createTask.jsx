import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Autocomplete, TextField } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {Button} from '@mui/material';
import axios from 'axios';
import keycloakInstance from '../keycloak/keycloak.js';
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
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    color: '#fff'
};

const tags = ["Angular", "React", "Vuejs", "Spring Boot", "Node js", "Django"]

const CreateTask = ({ open, handleClose }) => {

    const [formData, setFormData] = useState(
    {
        title: "",
        image:"",
        description: "",
        tags:[],
        deadline: new Date()
    });

    const[selectedTags, setSelectedTags] = useState([]);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    const handleTagChange = (event, value) => {
        setSelectedTags(value);
    }

    const handleDeadlineChange = (date) => {
        setFormData({
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
        console.log("Token: " + token);

        const testData = {
            "title": "Implement JWT Authentication",
            "description": "Create JWT authentication for the REST API endpoints",
            "image": "https://example.com/images/jwt-auth.png",
            "assignedUserId": 1,
            "tags": ["authentication", "security", "backend"],
            "status": "PENDING",
            "createdAt": "2023-06-10T10:15:30",
            "deadline": "2023-06-15T23:59:59"
          }

        try {
            const response = await axios.post(
                "http://localhost:5002/api/tasks", 
                formData, 
                {
                  headers: {
                    'Authorization': `Bearer ${token}`, 
                  },
                }
              );      
            console.log(response);
            if (response.status === 200 || response.status === 201) {
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
        handleClose();
        console.log(formData);
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
                    Create New Task
                </Typography>
                <form>
                    <Box mb={2}>
                        <TextField
                            label="Title"
                            fullWidth
                            name="title"
                            value={FormData.title}
                            onChange={handleChange}
                        />
                    </Box>
                    <Box mb={2}>
                        <TextField
                            label="Description"
                            fullWidth
                            name="description"
                            rows={10}
                            value={FormData.description}
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
                            value={FormData.image}
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
                            Create
                        </Button>
                    </Box>
                </form>
            </Box>
            </Modal>
        </div>
    );
}

export default CreateTask;
