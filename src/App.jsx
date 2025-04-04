import { useState, useEffect } from 'react';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import styled, { ThemeProvider } from 'styled-components';
import './App.css';
import { darkTheme, lightTheme } from './utils/Theme';
import Home from './pages/Home';
import Video from './pages/Video';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth <= 768) {
        setMenuOpen(false);
      } else {
        setMenuOpen(true);
      }
    };

    // Initial check
    checkScreenSize();
    
    // Add event listener
    window.addEventListener('resize', checkScreenSize);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <BrowserRouter>
          <Menu darkMode={darkMode} setDarkMode={setDarkMode} isOpen={menuOpen} isMobile={isMobile} />
          <Main menuOpen={menuOpen} isMobile={isMobile}>
            <Navbar toggleMenu={toggleMenu} />
            <Wrapper>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/video/test" element={<Video />} />
                <Route path="/signin" element={<SignIn />} />
              </Routes>
            </Wrapper>
          </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  overflow: hidden;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Main = styled.div`
  flex: 1;
  background: ${({ theme }) => theme.bg};
  overflow-y: auto;
  transition: margin-left 0.3s ease;
  
  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
  }
  
  @media (min-width: 769px) {
    margin-left: ${props => props.menuOpen ? '0' : '-240px'};
  }
`;

const Wrapper = styled.div`
  padding: 20px;
  
  @media (max-width: 480px) {
    padding: 10px;
  }
`;
