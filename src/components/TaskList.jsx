import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskCard from './TaskCard';
import '../assets/css/Modal.css';
import keycloakInstance from '../keycloak/keycloak';

export const TaskList = () => {
  // State to store the task list
  const [taskList, setTaskList] = useState([]);

  // Fetch data from the backend
  useEffect(() => {
    const fetchTaskList = async () => {
      try {
        const token = keycloakInstance.getToken();
        const response = await axios('http://localhost:5002/api/tasks',
        {
          headers: {
              'Authorization': `Bearer ${token}`, 
          },
        }); 
        console.log(response);
        setTaskList(response.data); 
      } catch (error) {
        console.error('Error fetching the task list:', error);
      }
    };

    fetchTaskList();
  }, []); 

  return (
    <div className='w-full flex flex-wrap justify-between gap-2'>
      {
        taskList.length > 0 ? (
          taskList.map((task, index) => <TaskCard task={task} key={index} role={task.role} />)
        ) : (
          <p>Loading tasks...</p> 
        )
      }
    </div>
  );
};

export default TaskList;



// import React from 'react'
// import TaskCard from './TaskCard'
// import '../assets/css/Modal.css'

// const taskList = [
//     {
//       "id": 1,
//       "title": "Car Rental Website",
//       "description": "Develop a car rental website using the latest technologies, ensuring cross-browser compatibility and performance optimization. Focus on user-friendly design and responsive layouts.",
//       "image": "https://themewagon.com/wp-content/uploads/2020/04/carbook-1.jpg",
//       "technologies": ["React", "Node.js", "MongoDB", "Express"],
//       "role": "ROLE_ADMIN"
//     },
//     {
//       "id": 2,
//       "title": "E-commerce Platform",
//       "description": "Create an e-commerce platform with a modern interface and advanced features like product filtering, recommendations, and payment gateway integration.",
//       "image": "https://images.squarespace-cdn.com/content/v1/5769fc401b631bab1addb2ab/1541580611624-TE64QGKRJG8SWAIUS7NS/ecommerce.jpg",
//       "technologies": ["Angular", "Spring Boot", "MySQL", "AWS"],
//       "role": "ROLE_USER"
//     },
//     {
//       "id": 3,
//       "title": "Social Media App",
//       "description": "Build a social media app with real-time chat functionality, user profiles, and a content-sharing feature. Ensure the app scales well with increased user traffic.",
//       "image": "https://media.licdn.com/dms/image/D4D12AQGuP-VKfihvgA/article-cover_image-shrink_720_1280/0/1657970631240?e=2147483647&v=beta&t=Y-55uWkchuKcc-HJ-2S-46bB8CRHk7MkSMml-L0DNNw",
//       "technologies": ["Vue.js", "Firebase", "Tailwind CSS", "Node.js"],
//       "role": "ROLE_ADMIN"
//     },
//     {
//       "id": 4,
//       "title": "Project Management Tool",
//       "description": "Design a project management tool that helps teams collaborate, track progress, and manage tasks effectively. Incorporate Gantt charts, Kanban boards, and reporting features.",
//       "image": "https://shrilearning.com/wp-content/uploads/2023/09/project-management-software-tools.png",
//       "technologies": ["React", "Redux", "Django", "PostgreSQL"],
//       "role": "ROLE_USER"
//     },
//     {
//       "id": 5,
//       "title": "Learning Management System",
//       "description": "Develop a learning management system (LMS) that allows educators to create courses, manage student enrollments, and track progress. Include features like quizzes, forums, and grading.",
//       "image": "https://www.opti.ro/images/new-post/medium_long-learning-management-systems.jpg",
//       "technologies": ["React", "Node.js", "GraphQL", "MongoDB"],
//       "role": "ROLE_ADMIN"
//     }
//   ]

// export const TaskList = () => {
//   return (
//     <div className='w-full flex flex-wrap justify-between gap-2'>
//         {
//             taskList.map((task, index) => <TaskCard task={task} key={index} role={task.role}/>)
//         }
//     </div>
//  )
// }

// export default TaskList;
