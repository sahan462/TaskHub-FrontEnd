// Importing the createTheme function from the @mui/material package
import { createTheme } from "@mui/material";

// Creating a custom theme called darkTheme using the createTheme function
const darkTheme = createTheme({
    // Defining the palette property to customize the colors and styles of the theme
    palette: {
        // Setting the mode to "dark" to apply dark mode styling
        mode: "dark",
        // Customizing the background colors
        background:{
            // Setting the default background color to transparent
            default: "transparent",
        },
        // Customizing the text colors
        text:{
            // Setting the primary text color to white
            primary: "#fff"
        },
        // Customizing the primary color
        primary:{
            // Setting the main primary color to a transparent version of rgba(215, 106, 255, 0)
            main: "rgba(215, 106, 255, 0, 507)"
        }
    }
})

// Exporting the darkTheme object so it can be used in other parts of the application
export default darkTheme;
