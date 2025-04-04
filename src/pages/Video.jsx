"use client"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import ThumbUpIcon from "@mui/icons-material/ThumbUp"
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt"
import ReplyIcon from "@mui/icons-material/Reply"
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder"
import Comments from "../components/Comments"
import Card from "../components/Card"

const Video = () => {
  const { videoId } = useParams()

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
              <ButtonText>Dislike</ButtonText>
            </Button>
            <Button>
              <ReplyIcon /> <ButtonText>Share</ButtonText>
            </Button>
            <Button>
              <BookmarkBorderIcon />
              <ButtonText>Save</ButtonText>
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
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, commodi sed! Aliquam iusto quidem quos,
                magnam modi debitis quia consequatur maxime ullam in amet nulla. Error ipsa ad tempore! Laboriosam.
              </Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe>SUBSCRIBE</Subscribe>
        </Channel>
        <Hr />
        <Comments />
      </Contents>
      <Recommendation>
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
      </Recommendation>
    </Container>
  )
}

export default Video

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`

const Contents = styled.div`
  flex: 1;
`

const Recommendation = styled.div`
  flex: 0 0 350px;
  
  @media (max-width: 1024px) {
    flex: 1;
    width: 100%;
  }
`

const VideoWrapper = styled.div`
  width: 100%;
  position: relative;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
`

const Title = styled.div`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
  
  @media (max-width: 480px) {
    font-size: 16px;
  }
`

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`

const Info = styled.div`
  color: ${({ theme }) => theme.textSoft};
  
  @media (max-width: 480px) {
    font-size: 14px;
  }
`

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
  
  @media (max-width: 480px) {
    gap: 10px;
  }
`

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  
  @media (max-width: 480px) {
    font-size: 14px;
  }
`

const ButtonText = styled.span`
  @media (max-width: 480px) {
    display: none;
  }
`

const Hr = styled.div`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.textSoft};
`

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`

const ChannelInfo = styled.div`
  display: flex;
  gap: 10px;
`

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  
  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
  }
`

const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`

const ChannelName = styled.span`
  font-weight: 500;
  font-size: 16px;
  color: ${({ theme }) => theme.text};
  
  @media (max-width: 480px) {
    font-size: 14px;
  }
`

const ChannelCounter = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
  margin-top: 5px;
  margin-bottom: 20px;
`

const Description = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.text};
  
  @media (max-width: 480px) {
    font-size: 12px;
  }
`

const Subscribe = styled.button`
  background-color: #cc1a00;
  color: white;
  border: none;
  border-radius: 3px;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  height: max-content;
  
  @media (max-width: 768px) {
    align-self: flex-start;
  }
  
  @media (max-width: 480px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`

