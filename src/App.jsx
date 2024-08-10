import './App.css'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles"
import { Container, CssBaseline } from "@mui/material";
import darkTheme from './theme/darktheme'
import { Layout } from './Layout'
import {Home} from './components/Home'
import {UserProfile} from './components/UserProfile';

const App = () => {
  return (
    // ThemeProvider applies the custom theme to all child components within its scope
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                  <Route path="/" element={<Home />} />
                  <Route path="/profile" element={<UserProfile />} />
                </Route>
            </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App
