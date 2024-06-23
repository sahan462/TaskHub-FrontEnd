import React from 'react'
import TaskCard from './TaskCard'
import '../assets/css/Modal.css'

export const TaskList = () => {
  return (
    <div className='w-full overflow-y-scroll custom-scrollbar p-3 rounded-lg'>
        <div className='space-y-3'>
            {
                [1,1,1,1,1,1].map((task) => <TaskCard />)
            }
        </div>
    </div>
 )
}

export default TaskList;
