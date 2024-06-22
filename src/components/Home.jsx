import React from 'react'
import SideBar from './SideBar'
import { TaskList } from './TaskList';

const Home = () => {
  return (
    <div className='w-full flex flex-col md:flex-row content-between gap-4 px-4 py-4'>
        <div className='left-side-part w-[20%] border-2 border-gray-200 bg-gray-100 rounded-2xl'>
            <SideBar />
        </div>
        <div className='right-side-part flex justify-center w-[80%] h-[85vh] border-2 border-gray-200 bg-gray-100 rounded-2xl'>
            <TaskList />
        </div>
    </div>

  )
}

export default Home;