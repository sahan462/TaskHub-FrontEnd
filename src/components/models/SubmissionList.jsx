import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button, Divider, IconButton } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

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
  color: '#e5e7eb'
};

const submissionList = [1, 1, 1, 1, 1]; 

const SubmissionList = ({ open, handleClose }) => {

  const handleAcceptDecline = (status) => {
    console.log(status);
  }

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
            Submission List
          </Typography>

          <div className="overflow-y-scroll custom-scrollbar max-h-[400px]">
            {
              submissionList.length === 0 ?
                <div className="text-center text-gray-400">
                  No Submissions Found
                </div>
                :
                submissionList.map((item, index) => (
                  <React.Fragment key={index}>
                    <div className='flex items-center justify-between w-full py-3'>
                      <div className='flex flex-col'> 
                        <div className='flex items-center gap-2 text-sm text-gray-300'>
                          GitHub :
                          <div className='text-blue-400 flex items-center gap-2'>
                            <OpenInNewIcon fontSize="small" />
                            <a href="/" target="_blank" rel="noopener noreferrer" className="underline">
                              Go To Link
                            </a>
                          </div>
                        </div>
                        <div className='flex gap-2 text-sm text-gray-400 mt-1'>
                          <p>Submission Time :</p>
                          <p>time</p>
                        </div>
                      </div>
                      <div>
                        <div>
                          <IconButton 
                            color='success' 
                            onClick={() => handleAcceptDecline("ACCEPTED")}
                            sx={{ color: '#34d399' }}
                          >
                            <CheckIcon />
                          </IconButton>
                          <IconButton 
                            color='error' 
                            onClick={() => handleAcceptDecline("DECLINED")}
                            sx={{ color: '#f87171' }}
                          >
                            <CloseIcon />
                          </IconButton>
                        </div>
                      </div>
                    </div>
                    <Divider sx={{ borderColor: '#374151' }} />
                  </React.Fragment>
                ))
            }
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default SubmissionList;
