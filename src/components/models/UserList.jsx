import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { ListItem, ListItemAvatar, Avatar, List, ListItemText, Button } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

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

const userList = [
  { id: 1, name: 'John Doe', role: 'Developer' },
  { id: 2, name: 'Jane Smith', role: 'Designer' },
  { id: 3, name: 'Mike Johnson', role: 'Project Manager' },
  { id: 4, name: 'Emily Brown', role: 'QA Tester' },
  { id: 1, name: 'John Doe', role: 'Developer' },
  { id: 2, name: 'Jane Smith', role: 'Designer' },
  { id: 3, name: 'Mike Johnson', role: 'Project Manager' },
  { id: 4, name: 'Emily Brown', role: 'QA Tester' },
];

const UserList = ({ open, handleClose }) => {
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
              borderBottom: '2px solid #64748b', 
              pb: 1, 
              mb: 2,
              fontFamily: 'Poppins, sans-serif'
            }}>
            Assigned User List
          </Typography>

          <List sx={{ maxHeight: 400, overflowY: 'auto', px: 1 }}>
            {userList.map((user) => (
              <ListItem
                key={user.id}
                sx={{
                  mb: 1,
                  bgcolor: '#334155',
                  borderRadius: '8px',
                  p: 1,
                  '&:hover': { bgcolor: '#475569' },
                  transition: 'background-color 0.3s ease',
                }}
                secondaryAction={
                  <Button
                    variant="contained"
                    size="small"
                    startIcon={<PersonAddIcon />}
                    sx={{
                      bgcolor: '#22d3ee',
                      color: '#0f172a',
                      '&:hover': { bgcolor: '#67e8f9' },
                      textTransform: 'none',
                      fontWeight: 'bold',
                      fontFamily: 'Poppins, sans-serif'
                    }}
                  >
                    Select
                  </Button>
                }
              >
                <ListItemAvatar>
                  <Avatar 
                    src={`https://i.pravatar.cc/150?u=${user.id}`} 
                    sx={{ border: '2px solid #22d3ee' }}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={user.name}
                  secondary={user.role}
                  primaryTypographyProps={{ 
                    fontWeight: 'bold', 
                    color: '#e2e8f0',
                    fontFamily: 'Poppins, sans-serif'
                  }}
                  secondaryTypographyProps={{
                    color: '#cbd5e1',
                    fontFamily: 'Poppins, sans-serif'
                  }}
                />
              </ListItem>
            ))}
          </List>

        </Box>
      </Modal>
    </div>
  );
}

export default UserList;


// import React from 'react';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';
// import { List, ListItem, ListItemAvatar, Avatar, ListItemText, Button, IconButton } from '@mui/material';
// import CloseIcon from '@mui/icons-material/Close';
// import PersonAddIcon from '@mui/icons-material/PersonAdd';

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: '#121212',
//   borderRadius: 2,
//   boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
//   p: 3,
// };

// const userList = [
//   { id: 1, name: 'John Doe', role: 'Developer' },
//   { id: 2, name: 'Jane Smith', role: 'Designer' },
//   { id: 3, name: 'Mike Johnson', role: 'Project Manager' },
//   { id: 4, name: 'Emily Brown', role: 'QA Tester' },
// ];

// const UserList = ({ open, handleClose }) => {
//   return (
//     <Modal
//       open={open}
//       onClose={handleClose}
//       aria-labelledby="modal-modal-title"
//       aria-describedby="modal-modal-description"
//     >
//       <Box sx={style}>
//         <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
//           <Typography id="modal-modal-title" variant="h6" component="h2" fontWeight="bold" color="#fff">
//             Assigned Users
//           </Typography>
//           <IconButton onClick={handleClose} size="small">
//             <CloseIcon />
//           </IconButton>
//         </Box>
//         <List sx={{ maxHeight: 400, overflowY: 'auto' }}>
//           {userList.map((user) => (
//             <ListItem
//               key={user.id}
//               sx={{
//                 mb: 1,
//                 bgcolor: '#f3f4f6',
//                 borderRadius: 1,
//                 '&:hover': { bgcolor: '#e5e7eb' },
//               }}
//               secondaryAction={
//                 <Button
//                   variant="contained"
//                   size="small"
//                   startIcon={<PersonAddIcon />}
//                   className='bg-gray-800'
//                   sx={{
//                     bgcolor: '#3b82f6',
//                     '&:hover': { bgcolor: '#2563eb' },
//                   }}
//                 >
//                   Select
//                 </Button>
//               }
//             >
//               <ListItemAvatar>
//                 <Avatar src={`https://i.pravatar.cc/150?u=${user.id}`} />
//               </ListItemAvatar>
//               <ListItemText
//                 primary={user.name}
//                 secondary={user.role}
//                 primaryTypographyProps={{ fontWeight: 'medium' }}
//               />
//             </ListItem>
//           ))}
//         </List>
//       </Box>
//     </Modal>
//   );
// }

// export default UserList;