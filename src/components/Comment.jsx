import styled from "styled-components"

const Comment = () => {
  return (
    <Container>
      <Avatar src="/avatar.webp" />
      <Details>
        <Name>
          Saad Patni <Date>1 day ago</Date>
        </Name>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo necessitatibus minus velit iste cumque nam
          maxime numquam omnis aperiam inventore ea nemo assumenda ullam, dolor exercitationem sint qui reprehenderit!
          Velit.
        </Text>
      </Details>
    </Container>
  )
}

export default Comment

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
  
  @media (max-width: 480px) {
    gap: 8px;
    margin: 20px 0px;
  }
`

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  
  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
  }
`

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.text};
  flex: 1;
  
  @media (max-width: 480px) {
    gap: 5px;
  }
`

const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
  
  @media (max-width: 480px) {
    font-size: 12px;
  }
`

const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
  
  @media (max-width: 480px) {
    font-size: 11px;
  }
`

const Text = styled.span`
  font-size: 14px;
  
  @media (max-width: 480px) {
    font-size: 12px;
  }
`

