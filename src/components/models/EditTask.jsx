// import React, { useState } from 'react'
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';
// import { Autocomplete, TextField } from '@mui/material';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import {Button} from '@mui/material';

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 500,
//   bgcolor: '#121212',
//   border: 'none',
//   boxShadow: 24,
//   p: 3,
//   borderRadius: '10px',
//   color: '#fff'
// };

// const tags = ["Angular", "React", "Vuejs", "Spring Boot", "Node js", "Django"]


// const EditTask = ({ open, handleClose }) => {

//   const [formData, setFormData] = useState(
//     {
//         title: "",
//         image:"",
//         description: "",
//         tags:[],
//         deadline: new Date()
//     });

//   const[selectedTags, setSelectedTags] = useState([]);

//   const handleChange = (e) => {
//       const {name, value} = e.target;
//       setFormData({
//           ...formData,
//           [name]: value,
//       });
//   }

//   const handleTagChange = (event, value) => {
//       setSelectedTags(value);
//   }

//   const handleDeadlineChange = (date) => {
//       setFormData({
//           ...formData,
//           deadline:date
//       })
//   }

//   const handleSubmit = (e) => {
//       e.preventDefault();
//       const {deadline} = formData;
//       formData.deadline = formatDate(deadline);
//       formData.tags = selectedTags;
//       console.log(formData);
//       handleClose();
//   };

//   const formatDate = (input) => {
//       let {
//         $y: year,
//         $M: month,
//         $D: day,
//         $H: hours,
//         $m: minutes,
//         $s: seconds,
//         $ms: milliseconds,
//       } = input;

//       const date = new Date(year, month, day, hours, minutes, seconds, milliseconds);
//       const formattedDate = date.toISOString();
      
//       return formattedDate;
//   }
    
//   return (
//     <div>
//       <Modal
//       open={open}
//       onClose={handleClose}
//       aria-labelledby="modal-modal-title"
//       aria-describedby="modal-modal-description"
//       >
//         <Box sx={style} className='bg-gray-800 rounded'>
//             <Typography 
//                 id="modal-modal-title" 
//                 variant="h6" 
//                 component="h2" 
//                 sx={{
//                 borderBottom: '2px solid #64748b', 
//                 pb: 1, 
//                 mb: 2,
//                 fontFamily: 'Poppins, sans-serif'
//                 }}>
//                 Edit Task
//             </Typography>
//             <form>
//                 <Box mb={2}>
//                     <TextField
//                         label="Title"
//                         fullWidth
//                         name="title"
//                         value={FormData.title}
//                         onChange={handleChange}
//                     />
//                 </Box>
//                 <Box mb={2}>
//                     <TextField
//                         label="Description"
//                         fullWidth
//                         name="description"
//                         rows={10}
//                         value={FormData.description}
//                         onChange={handleChange}
//                     />
//                 </Box>
//                 <Box mb={2}>
//                     <Autocomplete 
//                         multiple
//                         id="multiple-limit-tags"
//                         onChange={handleTagChange}
//                         options={tags} 
//                         getOptionLabel={(option) => option}
//                         renderInput={(params) => 
//                             <TextField 
//                                 label="Tags"
//                                 fullWidth
//                                 {...params}
//                             />
//                         }
//                     />
//                 </Box>    
//                 <Box mb={2}>
//                     <TextField
//                         label="Image"
//                         fullWidth
//                         name="image"
//                         value={FormData.image}
//                         onChange={handleChange}
//                     />
//                 </Box>
//                 <Box mb={2}>
//                     <LocalizationProvider dateAdapter={AdapterDayjs}>
//                         <DemoContainer components={['DatePicker']}>
//                             <DatePicker 
//                                 onChange={handleDeadlineChange}
//                                 label="Deadline" 
//                                 className='w-full'
//                                 renderInput = {(params) => <TextField {...params}/>}
//                             />
//                         </DemoContainer>
//                     </LocalizationProvider>
//                 </Box>
//                 <Box>
//                     <Button
//                         type="submit"
//                         fullWidth
//                         className="customButton"
//                         onClick={handleSubmit}
//                         variant="contained"
//                         sx={{
//                             backgroundColor: 'primary.main',
//                             color: 'white',
//                             '&:hover': {
//                                 backgroundColor: 'primary.dark',
//                             },
//                         }}
//                     >
//                         Create
//                     </Button>
//                 </Box>
//             </form>
//         </Box>
//       </Modal>
//     </div>
//   );
// }

// export default EditTask;
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
  width: 500,
  bgcolor: '#121212',
  border: 'none',
  boxShadow: 24,
  p: 3,
  borderRadius: '10px',
  color: '#fff'
};

const tags = ["Angular", "React", "Vuejs", "Spring Boot", "Node js", "Django"]


const EditTask = ({ open, handleClose }) => {

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
      formData.deadline = formatDate(deadline);
      formData.tags = selectedTags;
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

export default EditTask;
