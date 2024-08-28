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

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
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

    const handleSubmit = (e) => {
        e.preventDefault();
        const {deadline} = formData;
        console.log(formData);
    };

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
                    <Box>
                        <TextField
                            label="Title"
                            fullWidth
                            name="title"
                            value={FormData.title}
                            onChange={handleChange}
                        />
                    </Box>
                    <Box>
                        <TextField
                            label="Description"
                            fullWidth
                            name="description"
                            rows={10}
                            value={FormData.description}
                            onChange={handleChange}
                        />
                    </Box>
                    <Box>
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
                    <Box>
                        <TextField
                            label="Image"
                            fullWidth
                            name="image"
                            value={FormData.image}
                            onChange={handleChange}
                        />
                    </Box>
                    <Box>
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
                        <Button type='submit ' fullWidth typeclassName="customButton" onClick={handleSubmit}>
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
