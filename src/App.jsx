import './App.css'
import { ThemeProvider } from '@emotion/react'
import darkTheme from './theme/darktheme'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Footer from './components/Footer'

const App = () => {
  return (
    // ThemeProvider applies the custom theme to all child components within its scope
    <ThemeProvider theme={darkTheme}>

      <NavBar />
      <Home />
      <Footer />

    </ThemeProvider>
  );
}

export default App
