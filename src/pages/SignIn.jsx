import styled from "styled-components"

const SignIn = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign in</Title>
        <SubTitle>To Continue to YouTube</SubTitle>
        <Input placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <Button>Sign in</Button>
        <Divider>or</Divider>
        <SubTitle>Sign up to create an account</SubTitle>
        <Input placeholder="Username" />
        <Input placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Button>Sign up</Button>
      </Wrapper>
      <More>
        English (USA)
        <Links>
          <Link>Help</Link>
          <Link>Privacy</Link>
          <Link>Terms</Link>
        </Links>
      </More>
    </Container>
  )
}

export default SignIn

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 56px);
  color: ${({ theme }) => theme.text};
  padding: 20px;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.bgLighter};
  border: 1px solid ${({ theme }) => theme.soft};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  gap: 15px;
  width: 100%;
  max-width: 400px;
  
  @media (max-width: 480px) {
    padding: 15px;
    gap: 10px;
  }
`

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
  
  @media (max-width: 480px) {
    font-size: 20px;
    margin-bottom: 5px;
  }
`

const SubTitle = styled.h2`
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.textSoft};
  
  @media (max-width: 480px) {
    font-size: 16px;
    margin-bottom: 5px;
  }
`

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.soft};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  outline: none;
  font-size: 14px;

  &:focus {
    border-color: ${({ theme }) => theme.primary};
  }
  
  @media (max-width: 480px) {
    padding: 8px;
    font-size: 13px;
  }
`

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.soft};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 100%;

  &:hover {
    background-color: ${({ theme }) => theme.primaryHover};
  }
  
  @media (max-width: 480px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`

const Divider = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  position: relative;
  width: 100%;
  text-align: center;
  margin: 10px 0;
  
  &::before, &::after {
    content: "";
    position: absolute;
    top: 50%;
    width: 40%;
    height: 1px;
    background-color: ${({ theme }) => theme.soft};
  }
  
  &::before {
    left: 0;
  }
  
  &::after {
    right: 0;
  }
`

const More = styled.div`
  margin-top: 20px;
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Links = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 15px;
`

const Link = styled.span`
  cursor: pointer;
  color: ${({ theme }) => theme.textSoft};
  text-decoration: underline;

  &:hover {
    color: ${({ theme }) => theme.text};
  }
`

