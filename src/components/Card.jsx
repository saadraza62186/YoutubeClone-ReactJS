import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Card = ({type}) => {
  return (
    <Link to='/video/test' style={{textDecoration:"none"}}>
    <Container type={type}>
        <Image type={type} src='/image.jpg' />
        <Details type={type}>
          <ChannelImage type={type} src='/saad.jpeg' />
          <Texts>
            <Title>Test Video</Title>
            <ChannelName>Saad's Channel</ChannelName>
            <Info>660,908 views ~ 1 day ago</Info>
          </Texts>
        </Details>
    </Container>
    </Link>
  )
}

export default Card

// const Container = styled.div`
//     width: ${(props) => props.type !== 'sm' && '340px'};
//     margin-bottom: ${(props) => props.type === 'sm' ? 'px' : '45px'};
//     cursor: pointer;
//     display: ${(props) => props.type === 'sm' && 'flex'};
//     gap: 10px;
// `
// const Image = styled.img`
//     width: 100%;
//     height: ${(props) => props.type === 'sm' ? '100px' : '202px'};
//     background-color: #999;
// `
// const Details = styled.div`
//   display: flex;
//   margin-top: ${(props) => props.type !=='sm' && '16px'};
//   gap: 12px;
// `
// const ChannelImage = styled.img`
//   width: 36px;
//   height: 36px;
//   border-radius: 50%;
//   background-color: #999;
//   display: ${(props) => props.type === 'sm' ? 'none' : 'flex'};
// `
const Texts = styled.div``
// const Title = styled.h1`
//   font-size: 16px;
//   font-weight: 500;
//   color: ${({theme}) => theme.text};

// `
// const ChannelName = styled.h2`
//   font-size: 14px;
//   color: ${({theme}) => theme.textSoft};
//   margin: 9px 0px;

// `
// const Info = styled.div`
// font-size: 14px;
//   color: ${({theme}) => theme.textSoft};`

const Container = styled.div`
  width: ${(props) => (props.type !== 'sm' ? '340px' : 'auto')};
  margin-bottom: ${(props) => (props.type === 'sm' ? '15px' : '45px')};
  cursor: pointer;
  display: ${(props) => (props.type === 'sm' ? 'flex' : 'block')};
  gap: 10px;
`;

const Image = styled.img`
  width: ${(props) => (props.type === 'sm' ? '150px' : '100%')};
  height: ${(props) => (props.type === 'sm' ? '84px' : '202px')};
  background-color: #999;
`;

const Details = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.type === 'sm' ? 'column' : 'row')};
  margin-top: ${(props) => (props.type !== 'sm' && '16px')};
  gap: ${(props) => (props.type === 'sm' ? '5px' : '12px')};
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props) => (props.type === 'sm' ? 'none' : 'flex')};
`;

const Title = styled.h1`
  font-size: ${(props) => (props.type === 'sm' ? '14px' : '16px')};
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: ${(props) => (props.type === 'sm' ? '12px' : '14px')};
  color: ${({ theme }) => theme.textSoft};
  margin: ${(props) => (props.type === 'sm' ? '0' : '9px 0px')};
`;

const Info = styled.div`
  font-size: ${(props) => (props.type === 'sm' ? '12px' : '14px')};
  color: ${({ theme }) => theme.textSoft};
  margin-top: ${(props) => (props.type === 'sm' ? '4px' : '0')};
`;
