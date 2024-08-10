import React, { useState } from "react";
import "../assets/css/SideBar.css";
import CreateTask from "./createTask";

const menu = [
    { name: "Home", value: "Home", role: ["ROLE_ADMIN", "ROLE_CUSTOMER"] },
    { name: "Completed Tasks", value: "DONE", role: ["ROLE_ADMIN", "ROLE_CUSTOMER"] },
    { name: "Assigned Tasks", value: "ASSIGNED", role: ["ROLE_ADMIN"] },
    { name: "Pending Tasks", value: "NOT ASSIGNED", role: ["ROLE_ADMIN"] },
    { name: "Craft New Task", value: "", role: ["ROLE_ADMIN"] },
    { name: "Notifications", value: "Notification", role: ["ROLE_CUSTOMER"] }
];

const role = "ROLE_ADMIN";

const SideBar = () => {

    const [activeMenu, setActiveMenu] = useState("Home");

    const handleMenuChange = (item) => {
        if (item.name === "Craft New Task") {
            // Handle new task creation logic here
        }
        setActiveMenu(item.name);
    };

    const handleLogOut = () => {
        // Handle logout logic here
    };

    return (
        <div className="min-h-[85vh] flex flex-col justify-center items-center bg-gray-100 py-5">
            <div className="space-y-5 w-full flex flex-col justify-center items-center">
                <div className="flex justify-center items-center mb-5">
                    {/* Uncomment and use an avatar or logo */}
                    {/* <Avatar src="src\assets\TaskHub.jpg" className="w-20 h-20 p-1 border-4 border-custom-blue" /> */}
                </div>
                {menu.filter((item) => item.role.includes(role))
                    .map((item) => (
                        <p
                            key={item.name}
                            onClick={() => handleMenuChange(item)}
                            className={`w-2/3 py-3 px-5 rounded-full text-center cursor-pointer transition-colors duration-200 ${activeMenu === item.name ? "bg-blue-500 text-white" : "bg-white text-gray-800 hover:bg-gray-200"}`}
                        >
                            {item.name}
                        </p>
                    ))}
                <button onClick={handleLogOut} className="w-full py-3 px-5 rounded-full text-center cursor-pointer bg-red-500 text-white hover:bg-red-600 transition-colors duration-200">
                    Log Out
                </button>
            </div>
            {/* <CreateTask open={true} handleClose={false} /> */}
        </div>
    )
}

export default SideBar;
