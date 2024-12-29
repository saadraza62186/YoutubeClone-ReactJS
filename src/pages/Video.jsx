import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ReplyIcon from "@mui/icons-material/Reply";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import Comments from "../components/Comments";
import Card from "../components/Card";
const Video = () => {
  const { videoId } = useParams();

  return (
    <Container>
      <Contents>
      <VideoWrapper>
      <iframe
        src="/image.jpg"
        title="YouTube Video Player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        autoFullScreen
      />
    </VideoWrapper>
        <Title>Test Video</Title>
        <Details>
          <Info>660,908 views ~ 1 day ago</Info>
          <Buttons>
            <Button>
              <ThumbUpIcon /> 123
            </Button>
            <Button>
              <ThumbDownAltIcon />
              Dislike
            </Button>
            <Button>
              <ReplyIcon /> Share
            </Button>
            <Button>
              <BookmarkBorderIcon />
              Save
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image src="/avatar.webp" />
            <ChannelDetail>
              <ChannelName>Saad's Channel</ChannelName>
              <ChannelCounter>200K Subscribers</ChannelCounter>
              <Description>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni,
                commodi sed! Aliquam iusto quidem quos, magnam modi debitis quia
                consequatur maxime ullam in amet nulla. Error ipsa ad tempore!
                Laboriosam.
              </Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe>SUBSCRIBE</Subscribe>
        </Channel>
        <Hr />
        <Comments />
      </Contents>
      <Recommendation>
        <Card type='sm'/>
        <Card type='sm'/>
        <Card type='sm'/>
        <Card type='sm'/>
        <Card type='sm'/>
        <Card type='sm'/>
        <Card type='sm'/>
      </Recommendation>
    </Container>
  );
};

export default Video;

// Styled Components
const Container = styled.div`
  display: flex;
  gap: 16px; /* Space between Contents and Recommendation */
  padding: 16px; /* Ensures proper spacing inside the container */
`;

const Contents = styled.div`
  flex: 6;
  min-width: 0; /* Prevents Contents from shrinking unexpectedly */
`;

const Recommendation = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 16px; /* Space between items inside Recommendation */
  margin-left: 16px; /* Adjusted margin to separate it from Contents */
  margin-top: 16px; /* Optional: Adds space above the Recommendation section */
`;

const VideoWrapper = styled.div`
  /* Optional: Add a background or styling */
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  iframe {
    width: 780px;
    height: 450px;
    border: none; /* Optional: Removes the border */
  }
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.div`
  color: ${({ theme }) => theme.textSoft};
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const Hr = styled.div`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.textSoft};
`;

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChannelInfo = styled.div`
  display: flex;
  gap: 10px;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.span`
  font-weight: 500;
  font-size: 16px;
  color: ${({ theme }) => theme.text};
`;

const ChannelCounter = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
  margin-top: 5px;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.text};
`;

const Subscribe = styled.button`
  background-color: #cc1a00;
  color: white;
  border: none;
  border-radius: 3px;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  height: max-content;
  padding: 10px 20px;
`;
