import * as React from 'react';
import '../assets/css/TaskCard.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Menu, MenuItem, IconButton } from '@mui/material';
import { useState } from 'react';
import UserList from './models/UserList';
import SubmissionList from './models/SubmissionList';
import EditTask from './models/EditTask';

function TaskCard() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const role = "ROLE_ADMIN";

  const [openUserList, setOpenUserList] = useState(false);
  const [openSubmissionList, setOpenSubmissionList] = useState(false);
  const [openEditTask, setOpenEditTask] = useState(false);

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

  const handleDeleteTask = () => {


  };

  return (
    <div className="card lg:flex justify-between border-2 border-gray-400 bg-gray-300 rounded-2xl px-2 py-2">
      <div className="lg:flex gap-5 items-center space-y-2 w-full lg:w-[70%]">
        <div className="">
          <img
            className="object-cover lg:w-[7rem] lg:h-[7rem]"
            src="https://media.istockphoto.com/id/1492645918/photo/survey-form-concept-businessman-using-laptops-do-online-checklist-surveys-questionnaire-with.webp?b=1&s=170667a&w=0&k=20&c=Kwf3pLtP1CO1UhefNrGRLIVMQvFu5jlRKu87Pz1LE4k="
            alt=""
          />
        </div>

        <div className="space-y-5">
          <div className="space-y-2">
            <h1 className="font-bold text-lg">Car Rental Website</h1>
            <p className="text-gray-500 text-sm">
              Use the latest frameworks and technology to make this website
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {[1, 2, 3, 4].map((item) => (
              <span key={item} className="py-1 px-5 border-1 border-gray-200 rounded-full techStack">
                Angular
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="lg:ml-auto">
        <IconButton aria-label="more" aria-controls="long-menu" aria-haspopup="true" onClick={handleMenu}>
          <MoreVertIcon />
        </IconButton>
          
        {

        role === "ROLE_ADMIN" ? (
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                <MenuItem onClick={handleOpenUserList}>Assigned User</MenuItem>
                <MenuItem onClick={handleOpenSubmissionList}>See Submissions</MenuItem>
                <MenuItem onClick={handleOpenEditTaskModel}>Edit</MenuItem>
                <MenuItem onClick={handleDeleteTask}>Delete</MenuItem>
            </Menu>
        ) : (
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                <MenuItem onClick={handleClose}>Edit</MenuItem>
                <MenuItem onClick={handleClose}>Delete</MenuItem>
            </Menu>
        )

        }

        <UserList open={openUserList} handleClose={handleCloseUserList}/>
        <SubmissionList open={openSubmissionList} handleClose={handleCloseSubmissionList}/>
        <EditTask open={openEditTask} handleClose={handleCloseEditTaskModel} />

      </div>
    </div>
  );
}

export default TaskCard;
