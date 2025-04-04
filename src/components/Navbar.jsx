import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

function Navbar({ toggleMenu }) {
  return (
    <Container>
      <Wrapper>
        <MenuButton onClick={toggleMenu}>
          <MenuIcon />
        </MenuButton>
        <Search>
          <Input placeholder='Search' />
          <SearchIcon />
        </Search>
        <Link to='signin' style={{ textDecoration: "none" }}>
          <Button>
            <AccountCircleIcon />
            SIGN IN
          </Button>
        </Link>
      </Wrapper>
    </Container>
  );
}

export default Navbar;

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 56px;
  z-index: 5;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: space-between;
  padding: 0px 20px;
  position: relative;
`;

const MenuButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 16px;
  color: ${({ theme }) => theme.text};
  
  @media (min-width: 769px) {
    display: none;
  }
`;

const Search = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  width: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  
  @media (max-width: 768px) {
    position: relative;
    width: 100%;
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
  }
  
  @media (max-width: 480px) {
    max-width: 200px;
  }
`;

const Input = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  color: ${({ theme }) => theme.text};
  width: 100%;
`;

const Button = styled.div`
  padding: 4px 8px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: fit-content;
  text-align: center;
  cursor: pointer;
  
  @media (max-width: 480px) {
    padding: 4px;
    font-size: 0;
    
    & > svg {
      margin: 0;
    }
  }
`;
