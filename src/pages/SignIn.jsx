import React from 'react';
import styled from 'styled-components';

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
  );
};

export default SignIn;

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* height: calc(100vh - 56px); */
  color: ${({ theme }) => theme.text};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.bgLighter};
  border: 1px solid ${({ theme }) => theme.soft};
  padding: 20px 50px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  gap: 15px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;

const SubTitle = styled.h2`
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.textSoft};
`;

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
`;

const Button = styled.button`
  /* width: 100%; */
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.soft};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.primaryHover};
  }
`;

const Divider = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

const More = styled.div`
  margin-top: 20px;
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Links = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 15px;
`;

const Link = styled.span`
  cursor: pointer;
  color: ${({ theme }) => theme.textSoft};
  text-decoration: underline;

  &:hover {
    color: ${({ theme }) => theme.text};
  }
`;
