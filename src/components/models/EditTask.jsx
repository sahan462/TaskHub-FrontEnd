import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

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


const EditTask = ({ open, handleClose }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography 
            id="modal-modal-title" 
            variant="h6" 
            component="h2" 
            sx={{
              borderBottom: '2px solid #4b5563',
              pb: 1,
              mb: 2,
              fontFamily: 'Poppins, sans-serif'
            }}
          >
            Edit Task
          </Typography>

          <div className="overflow-y-scroll custom-scrollbar max-h-[400px]">

          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default EditTask;
