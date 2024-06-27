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
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  color: '#fff'
};

const submissionList = [1,1,1,1,1]; 

const SubmissionList = ({ open, handleClose }) => {

  const handleAcceptDecline = (item) => {
    console.log(item);
  }


  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className='bg-gray-800 rounded max-h-[500px]'>
          <Typography 
            id="modal-modal-title" 
            variant="h6" 
            component="h2" 
            sx={{
              borderBottom: '2px solid #fff',
              pb: 1,
              mb: 1
            }}
          >
            Submission List
          </Typography>

          <div className="overflow-y-scroll custom-scrollbar max-h-[400px]">
            {
              submissionList.length === 0 ?
                <div>No Submissions Found</div>
                :
                submissionList.map((item, index) => (
                  <React.Fragment key={index}>
                    <div className='flex items-center justify-between w-full pr-3 pb-3 pt-3'>
                      <div className='flex flex-col'> 
                        <div className='flex items-center justify-center gap-2'>
                          GitHub :
                          <div className='text-custom-blue flex items-center justify-center gap-2'>
                            <OpenInNewIcon />
                            <a href="/" target="_blank" rel="noopener noreferrer">
                              Go To Link
                            </a>
                          </div>
                        </div>
                        <div className='flex gap-2'>
                          <p >Submission Time :</p>
                          <p>time</p>
                        </div>
                      </div>
                      <div>
                        {
                          true?<div>
                            <div >
                              <IconButton color='success' onClick={() => handleAcceptDecline("ACCEPTED")}>
                                <CheckIcon />
                              </IconButton>
                              <IconButton color='error' onClick={() => handleAcceptDecline("DECLINED")}>
                                <CloseIcon />
                              </IconButton>
                            </div>
                          </div>:<div>
                            <Button className='customButton'>Select</Button>
                          </div>
                        }
                      </div>
                    </div>
                    <Divider />
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
