import React from 'react'
import TaskCard from './TaskCard'

export const TaskList = () => {
  return (
    <div className='w-full overflow-y-scroll p-3'>
        <div className='space-y-3'>
            {
                [1,1,1,1,1,1].map((task) => <TaskCard />)
            }
        </div>
    </div>
 )
}

export default TaskList;
