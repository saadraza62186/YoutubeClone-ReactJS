import { useState } from 'react';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import styled, { ThemeProvider } from 'styled-components';
import './App.css';
import { darkTheme, lightTheme } from './utils/Theme';
import Home from './pages/Home'; // Assuming Home is a component for your home page.
import Video from './pages/Video'; // Assuming Video is a component for individual videos.
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <BrowserRouter>
          <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
          <Main>
            <Navbar />
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
`;

const Main = styled.div`
  flex: 7;
  background: ${({ theme }) => theme.bg};
`;

const Wrapper = styled.div`
  padding: 22px; /* Optional, you can style it as needed */

`;
