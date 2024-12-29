import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder='Search' />
          <SearchIcon />
        </Search>
        <Link to='signin' style={{textDecoration:"none"}}>
        <Button>
          <AccountCircleIcon />
          SIGN IN
        </Button>
        </Link>
      </Wrapper>
    </Container>
  )
}

export default Navbar
const Container = styled.div`
    position: sticky;
    top: 0;
    background-color: ${({theme}) => theme.bgLighter};
    height: 56px;

`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: flex-end;
  position: relative;
  padding: 0px 20px;
`  
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

`
const Input = styled.input`
  border: none;
  background-color: transparent;
`
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
    width: fit-content; /* Adjust width to fit the content */
    text-align: center; /* Center-align text */
    cursor: pointer; /* Add a pointer cursor for better UX */
`;

