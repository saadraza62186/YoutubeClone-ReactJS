import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = ({ type }) => {
  return (
    <Link to='/video/test' style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Image type={type} src='/image.jpg' />
        <Details type={type}>
          <ChannelImage type={type} src='/saad.jpeg' />
          <Texts>
            <Title type={type}>Test Video</Title>
            <ChannelName type={type}>Saad's Channel</ChannelName>
            <Info type={type}>660,908 views ~ 1 day ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;

const Container = styled.div`
  width: 100%;
  margin-bottom: ${(props) => (props.type === 'sm' ? '15px' : '0')};
  cursor: pointer;
  display: ${(props) => (props.type === 'sm' ? 'flex' : 'block')};
  gap: 10px;
`;

const Image = styled.img`
  width: ${(props) => (props.type === 'sm' ? '150px' : '100%')};
  height: ${(props) => (props.type === 'sm' ? '84px' : 'auto')};
  aspect-ratio: ${(props) => (props.type === 'sm' ? 'auto' : '16/9')};
  background-color: #999;
  object-fit: cover;
  
  @media (max-width: 480px) {
    width: ${(props) => (props.type === 'sm' ? '120px' : '100%')};
    height: ${(props) => (props.type === 'sm' ? '68px' : 'auto')};
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.type === 'sm' ? 'column' : 'row')};
  margin-top: ${(props) => (props.type !== 'sm' && '16px')};
  gap: ${(props) => (props.type === 'sm' ? '5px' : '12px')};
  flex: 1;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props) => (props.type === 'sm' ? 'none' : 'flex')};
  
  @media (max-width: 480px) {
    width: 30px;
    height: 30px;
  }
`;

const Texts = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  font-size: ${(props) => (props.type === 'sm' ? '14px' : '16px')};
  font-weight: 500;
  color: ${({ theme }) => theme.text};
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  
  @media (max-width: 480px) {
    font-size: ${(props) => (props.type === 'sm' ? '12px' : '14px')};
  }
`;

const ChannelName = styled.h2`
  font-size: ${(props) => (props.type === 'sm' ? '12px' : '14px')};
  color: ${({ theme }) => theme.textSoft};
  margin: ${(props) => (props.type === 'sm' ? '0' : '9px 0px')};
  
  @media (max-width: 480px) {
    font-size: ${(props) => (props.type === 'sm' ? '10px' : '12px')};
    margin: ${(props) => (props.type === 'sm' ? '0' : '5px 0px')};
  }
`;

const Info = styled.div`
  font-size: ${(props) => (props.type === 'sm' ? '12px' : '14px')};
  color: ${({ theme }) => theme.textSoft};
  margin-top: ${(props) => (props.type === 'sm' ? '4px' : '0')};
  
  @media (max-width: 480px) {
    font-size: ${(props) => (props.type === 'sm' ? '10px' : '12px')};
  }
`;
