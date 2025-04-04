import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import youtube from "../img/logo.png.png";
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import HistoryIcon from '@mui/icons-material/History';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import ArticleIcon from '@mui/icons-material/Article';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SettingsIcon from '@mui/icons-material/Settings';
import FlagIcon from '@mui/icons-material/Flag';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Menu({ darkMode, setDarkMode, isOpen, isMobile }) {
  if (isMobile && !isOpen) return null;
  
  return (
    <Container isOpen={isOpen} isMobile={isMobile}>
      <Wrapper>
        <Link to='/' style={{ textDecoration: "none", color: 'inherit' }}>
          <Logo>
            <Img src={youtube} alt="" />
            Youtube
          </Logo>
        </Link>
        <Items>
          <HomeIcon />
          Home
        </Items>
        <Items>
          <ExploreIcon />
          Explore
        </Items>
        <Items>
          <SubscriptionsIcon />
          Subscription
        </Items>
        <Hr />
        <Items>
          <LibraryAddIcon />
          Library
        </Items>
        <Items>
          <HistoryIcon />
          History
        </Items>
        <Hr />
        <Login>
          Sign in to like videos, comment, and Subscribe.
          <Link to='signin' style={{ textDecoration: "none" }}>
            <Button><AccountCircleIcon />SIGN IN</Button>
          </Link>
        </Login>
        <Hr />
        <Title>New Features</Title>
        <Items>
          <LibraryMusicIcon />
          Music
        </Items>
        <Items>
          <SportsBasketballIcon />
          Sports
        </Items>
        <Items>
          <SportsEsportsIcon />
          Gaming
        </Items>
        <Items>
          <MovieCreationIcon />
          Movies
        </Items>
        <Items>
          <ArticleIcon />
          News
        </Items>
        <Items>
          <LiveTvIcon />
          Live
        </Items>
        <Hr />
        <Items>
          <SettingsIcon />
          Settings
        </Items>
        <Items>
          <FlagIcon />
          Report
        </Items>
        <Items>
          <HelpOutlineIcon />
          Help
        </Items>
        <Items onClick={() => setDarkMode(!darkMode)}>
          <SettingsBrightnessIcon />
          {darkMode ? "Light" : "Dark"} Mode
        </Items>
      </Wrapper>
    </Container>
  );
}

export default Menu;

const Container = styled.div`
  flex: 0 0 240px;
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  transition: all 0.3s ease;
  z-index: 10;
  
  @media (max-width: 768px) {
    position: fixed;
    width: 240px;
    left: 0;
    top: 56px;
    height: calc(100vh - 56px);
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
    transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  }
`;

const Wrapper = styled.div`
  padding: 18px 15px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Img = styled.img`
  height: 35px;
`;

const Items = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  padding: 7.5px 0px;
  font-size: 14px;
  & > svg {
    font-size: 19px;
  }
  margin-top: 12px;

  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Login = styled.div`
  font-size: 14px;
`;

const Button = styled.div`
  padding: 4px 8px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: fit-content;
  text-align: center;
  cursor: pointer;
`;

const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 20px;
`;
