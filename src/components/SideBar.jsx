import React, { useState } from "react";
import "../assets/css/SideBar.css";
import CreateTask from "./createTask";

const menu=[
    {name: "Home", value: "Home", role: ["ROLE_ADMIN", "ROLE_CUSTOMER"]},
    {name: "Completed Tasks", value: "DONE", role: ["ROLE_ADMIN", "ROLE_CUSTOMER"]},
    {name: "Assigned Tasks", value: "ASSIGNED", role: ["ROLE_ADMIN"]},
    {name: "Pending Tasks", value: "NOT ASSIGNED", role: ["ROLE_ADMIN"]},
    {name: "Craft New Task", value: "", role: ["ROLE_ADMIN"]},
    {name: "Notifications", value: "Notification", role: ["ROLE_CUSTOMER"]}
]; 

const role = "ROLE_ADMIN";

const SideBar = () => {

    const [activeMenu, setActiveMenu] = useState("Home");

    const handleMenuChange = (item) => {

        if(item.name === "Craft New Task") {
        } 

        setActiveMenu(item.name);
    };

    const handleLogOut = () => {

    };

    return(
        <div className="min-h-[85vh] flex flex-col justify-center items-center ">
            <div className="space-y-5 h-full">
                <div className="flex justify-center items-center">
                    {/* <Avatar src="src\assets\TaskHub.jpg"  sx={{width: "8rem", height: "8rem"}} className= "w-4 h-4 p-1 border-4 border-custom-blue" ></Avatar> */}
                </div>
                {
                    menu.filter((item) => item.role.includes(role))
                    .map((item) => <p key = {item.name} onClick = {() => handleMenuChange(item)} className={`py-3 px-5 rounded-full text-center cursor-pointer ${activeMenu===item.name?"activeMenuItem":"menuItem"}`}>
                        {item.name}
                    </p>)
                }
                <button onClick = {handleLogOut} className="logOutButton w-full py-3 px-5 rounded-full text-center cursor-pointer">
                    Log Out
                </button>
            </div>
            <CreateTask open={true} handleClose={false} />

            

        </div>
    )
}

export default SideBar;

