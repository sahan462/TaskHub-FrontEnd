import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles"
import darkTheme from './theme/darktheme'
import { Layout } from './Layout'
import { Home } from './components/Home'
import { UserProfile } from './components/UserProfile';

const App = () => {
  return (
    <div className="App">
        <ThemeProvider theme={darkTheme}>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<UserProfile />} />
              </Route>
            </Routes>
        </ThemeProvider>
    </div>
  );
}

export default App;