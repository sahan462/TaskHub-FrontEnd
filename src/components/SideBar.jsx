import React from "react";
import { Avatar } from "@mui/material";

const menu=[
    {name: "Home", value: "Home", role: ["ROLE_ADMIN", "ROLE_CUSTOMER"]},
    {name: "Done", value: "DONE", role: ["ROLE_ADMIN", "ROLE_CUSTOMER"]},
    {name: "Asigned", value: "ASSIGNED", role: ["ROLE_ADMIN"]},
    {name: "Not Assigned", value: "NOT ASSIGNED", role: ["ROLE_ADMIN"]},
    {name: "Create New Task", value: "", role: ["ROLE_ADMIN"]},
    {name: "Notification", value: "Notification", role: ["ROLE_CUSTOMER"]}
]; 

const role = "ROLE_ADMIN";

const SideBar = () => {
    return(
        <div className="min-h-[85vh] flex flex-col items-center fixed w-[20vw] border-2 border-black ">
            <div className="space-y-5 h-full">
                <div className="flex justify-center">
                    {/* <Avatar src="src\assets\TaskHub.jpg"  sx={{width: "8rem", height: "8rem"}} className= "w-4 h-4 p-1 border-4 border-custom-blue" ></Avatar> */}
                </div>
                {
                    menu.filter((item) => item.role.includes(role))
                    .map((item) => <p className="">
                        {item.name}
                    </p>)
                }

            </div>
        </div>
    )
}

export default SideBar;

