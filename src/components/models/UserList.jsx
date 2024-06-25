import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { ListItem, ListItemAvatar, Avatar, List, ListItemText, Button } from '@mui/material';
import '../../assets/css/Modal.css';
import { Height } from '@mui/icons-material';

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

const userList = [1,1,1,1];

const UserList = ({ open, handleClose }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className='bg-gray-800 rounded max-h-[500px]'>
          
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{
        borderBottom: '2px solid #fff', 
        pb: 1, 
        mb: 1
      }}>
            Assigned User List
          </Typography>

          <div className="overflow-y-scroll custom-scrollbar max-h-[400px]">

            {
              
              userList.map((item) =>
                <div className='flex items-center justify-between w-full border-2 border-custom-blue mb-1 pr-3 rounded '>
                  <div>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar src="https://plus.unsplash.com/premium_photo-1664533227571-cb18551cac82?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFufGVufDB8fDB8fHww"></Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="test primary" secondary="test secondary"></ListItemText>
                    </ListItem>
                  </div>
                  <div>
                    <Button className='customButton'>Select</Button>
                  </div>
                </div>
              )

            }

          </div>

        </Box>
      </Modal>
    </div>
  );
}

export default UserList;
