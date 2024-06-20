import React from "react";
import { Avatar } from "@mui/material";

const NavBar = () => {
    return (
        <div className="z-10 sticky left-0 right-0 top-0 py-3 px-5 lg:px-10 flex justify-between items-center bg-gray-800 box-border">
            
            <div className="flex items-center justify-center gap-3">
                <Avatar src="src\assets\images\TaskHubWithoutName.jpg"  sx={{width: "3rem", height: "3rem"}} ></Avatar>
                <p className="font-bold text-4xl text-custom-blue">TaskHub</p>
            </div>

            <div className="flex items-center gap-5">

                <p className="text-white">DSahan</p>
                <Avatar src='https://plus.unsplash.com/premium_photo-1664533227571-cb18551cac82?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFufGVufDB8fDB8fHww' ></Avatar>
                
                {/* sx={{ bgcolor: 'rgba(59, 130, 246, var(--tw-text-opacity, 1))', color: 'white' }}
                The sx prop in Material-UI (MUI) is a powerful and versatile prop introduced in MUI v5.
                It allows you to apply styles directly to a component using a shorthand syntax.  */}

            </div>

        </div>
    )
};

export default NavBar;