import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Chip, IconButton, Menu, MenuItem, Dialog } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { motion } from 'framer-motion';
import UserList from './models/UserList';
import SubmissionList from './models/SubmissionList';
import EditTask from './models/EditTask';
import { DeleteConfirmDialog } from './models/DeleteConfirmDialog';

function TaskCard({ task, role }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const [openDialog, setOpenDialog] = useState({ type: null, isOpen: false });
  const [openUserList, setOpenUserList] = useState(false);
  const [openSubmissionList, setOpenSubmissionList] = useState(false);
  const [openEditTask, setOpenEditTask] = useState(false);
  const [openDeleteConfirm, setOpenDeleteConfirm] = useState(false);

  const handleMenu = (event) => setAnchorEl(event.currentTarget);
  const handleCloseMenu = () => setAnchorEl(null);
  const toggleExpanded = () => setExpanded(!expanded);

  const handleOpenDialog = (dialogType) => {
    setOpenDialog({ type: dialogType, isOpen: true });
    handleCloseMenu();
  };

  const handleCloseDialog = () => setOpenDialog({ type: null, isOpen: false });

    const handleOpenUserList = () => {
    setOpenUserList(true);
  };

  const handleCloseUserList = () => {
    setOpenUserList(false);
    handleClose();
  };

  const handleOpenSubmissionList = () => {
    setOpenSubmissionList(true);
  };

  const handleCloseSubmissionList = () => {
    setOpenSubmissionList(false);
    handleClose();
  };

  const handleOpenEditTaskModel = () => {
    setOpenEditTask(true);
  };

  const handleCloseEditTaskModel = () => {
    setOpenEditTask(false);
    handleClose();
  };

  const handleOpenDeleteConfirm = () => {
    setOpenDeleteConfirm(true);
  };

  const handleCloseDeleteConfirm = () => {
    setOpenDeleteConfirm(false);
    handleClose();
  };

  const handleDeleteTask = () => {
    // Add delete task logic here
    handleCloseDeleteConfirm();
  };

  const menuItems = role === "ROLE_ADMIN" 
    ? [
        { label: "Assigned User", action: () => handleOpenUserList("userList") },
        { label: "See Submissions", action: () => handleOpenSubmissionList("submissionList") },
        { label: "Edit", action: () => handleOpenEditTaskModel("editTask") },
        { label: "Delete", action: () => handleOpenDeleteConfirm("deleteConfirm") },
      ]
    : [
        { label: "Edit", action: handleCloseMenu },
        { label: "Delete", action: handleCloseMenu },
      ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card sx={{ maxWidth: 345, height: 445, display: 'flex', flexDirection: 'column' }}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <CardMedia
            component="img"
            sx={{ height: 200 }}
            image={task.image}
            alt={task.title}
          />
        </motion.div>
        <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <Typography gutterBottom variant="h5" component="div">
              {task.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {expanded ? task.description : `${task.description.slice(0, 60)}...`}
              <span
                style={{ color: 'blue', cursor: 'pointer', marginLeft: '5px' }}
                onClick={toggleExpanded}
              >
                {expanded ? 'Show less' : 'Read more'}
              </span>
            </Typography>
          </div>
          <div style={{ marginTop: '1rem' }}>
            {task.technologies.map((tech, index) => (
              <Chip key={index} label={tech} variant="outlined" size="small" style={{ margin: '0.25rem' }} />
            ))}
          </div>
        </CardContent>
        <div style={{ alignSelf: 'flex-end', padding: '0.5rem' }}>
          <motion.div whileTap={{ scale: 0.95 }}>
            <IconButton onClick={handleMenu}>
              <MoreVertIcon />
            </IconButton>
          </motion.div>
        </div>

        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleCloseMenu}>
          {menuItems.map((item, index) => (
            <MenuItem key={index} onClick={item.action}>{item.label}</MenuItem>
          ))}
        </Menu>

        <UserList open={openUserList} handleClose={handleCloseUserList} />
        <SubmissionList open={openSubmissionList} handleClose={handleCloseSubmissionList} />
        <EditTask open={openEditTask} handleClose={handleCloseEditTaskModel} />

      </Card>
    </motion.div>
  );
}

export default TaskCard;

// import * as React from 'react';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import {
//   Menu,
//   MenuItem,
//   IconButton,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogTitle,
//   Button,
// } from '@mui/material';
// import { useState } from 'react';
// import UserList from './models/UserList';
// import SubmissionList from './models/SubmissionList';
// import EditTask from './models/EditTask';

// function TaskCard() {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const open = Boolean(anchorEl);

//   const handleMenu = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const role = "ROLE_ADMIN";

//   const [openUserList, setOpenUserList] = useState(false);
//   const [openSubmissionList, setOpenSubmissionList] = useState(false);
//   const [openEditTask, setOpenEditTask] = useState(false);
//   const [openDeleteConfirm, setOpenDeleteConfirm] = useState(false);

//   const handleOpenUserList = () => {
//     setOpenUserList(true);
//   };

//   const handleCloseUserList = () => {
//     setOpenUserList(false);
//     handleClose();
//   };

//   const handleOpenSubmissionList = () => {
//     setOpenSubmissionList(true);
//   };

//   const handleCloseSubmissionList = () => {
//     setOpenSubmissionList(false);
//     handleClose();
//   };

//   const handleOpenEditTaskModel = () => {
//     setOpenEditTask(true);
//   };

//   const handleCloseEditTaskModel = () => {
//     setOpenEditTask(false);
//     handleClose();
//   };

//   const handleOpenDeleteConfirm = () => {
//     setOpenDeleteConfirm(true);
//   };

//   const handleCloseDeleteConfirm = () => {
//     setOpenDeleteConfirm(false);
//     handleClose();
//   };

//   const handleDeleteTask = () => {
//     // Add delete task logic here
//     handleCloseDeleteConfirm();
//   };

//   const [expanded, setExpanded] = useState(false);
//   const toggleExpanded = () => {
//     setExpanded(!expanded);
//   };

//   const description = "Use the latest frameworks and technology to make this website. Ensure compatibility across different devices and browsers. Focus on performance optimization and user-friendly design.";

//   return (
//     <div className="card flex flex-col justify-between border border-gray-200 bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-200 h-[300px] w-[300px]">
//       <div className="flex flex-col gap-4 items-center w-full lg:w-[70%]">
//         <div className="flex-shrink-0">
//           <img
//             className="object-cover w-24 h-24 rounded-md"
//             src="https://media.istockphoto.com/id/1492645918/photo/survey-form-concept-businessman-using-laptops-do-online-checklist-surveys-questionnaire-with.webp?b=1&s=170667a&w=0&k=20&c=Kwf3pLtP1CO1UhefNrGRLIVMQvFu5jlRKu87Pz1LE4k="
//             alt="Task"
//           />
//         </div>

//         <div className="flex flex-col gap-4">
//           <div>
//             <h1 className="font-bold text-xl text-gray-800">Car Rental Website</h1>
//             <p className="text-gray-600 text-sm">
//               {expanded ? description : description.slice(0, 60) + '...'}
//               <span
//                 className="text-blue-500 cursor-pointer"
//                 onClick={toggleExpanded}
//               >
//                 {expanded ? ' Show less' : ' Read more'}
//               </span>
//             </p>
//           </div>

//           <div className="flex flex-wrap gap-2">
//             {['Angular', 'React', 'Vue', 'Node.js'].map((tech, index) => (
//               <span
//                 key={index}
//                 className="py-1 px-4 border border-gray-300 rounded-full text-sm text-gray-700"
//               >
//                 {tech}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>

//       <div className="lg:ml-auto mt-4 lg:mt-0">
//         <IconButton aria-label="more" aria-controls="long-menu" aria-haspopup="true" onClick={handleMenu}>
//           <MoreVertIcon />
//         </IconButton>

//         <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
//           {role === "ROLE_ADMIN" ? (
//             <>
//               <MenuItem onClick={handleOpenUserList}>Assigned User</MenuItem>
//               <MenuItem onClick={handleOpenSubmissionList}>See Submissions</MenuItem>
//               <MenuItem onClick={handleOpenEditTaskModel}>Edit</MenuItem>
//               <MenuItem onClick={handleOpenDeleteConfirm}>Delete</MenuItem>
//             </>
//           ) : (
//             <>
//               <MenuItem onClick={handleClose}>Edit</MenuItem>
//               <MenuItem onClick={handleClose}>Delete</MenuItem>
//             </>
//           )}
//         </Menu>

//         <UserList open={openUserList} handleClose={handleCloseUserList} />
//         <SubmissionList open={openSubmissionList} handleClose={handleCloseSubmissionList} />
//         <EditTask open={openEditTask} handleClose={handleCloseEditTaskModel} />

//         <Dialog open={openDeleteConfirm} onClose={handleCloseDeleteConfirm}>
//           <DialogTitle>Confirm Delete</DialogTitle>
//           <DialogContent>Are you sure you want to delete this task?</DialogContent>
//           <DialogActions>
//             <Button onClick={handleCloseDeleteConfirm} color="primary">
//               Cancel
//             </Button>
//             <Button onClick={handleDeleteTask} color="secondary">
//               Delete
//             </Button>
//           </DialogActions>
//         </Dialog>
//       </div>
//     </div>
//   );
// }

// export default TaskCard;
