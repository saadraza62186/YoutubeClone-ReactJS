import styled from '@emotion/styled';
import React from 'react';
import Comment from './Comment';

const Comments = () => {
  return (
    <Container>
      <NewComment>
        <Avatar src='/avatar.webp' />
        <Input placeholder='Add a comment.....' />
      </NewComment>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </Container>
  );
};

export default Comments;

const Container = styled.div`
  width: 100%;
`;

const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  
  @media (max-width: 480px) {
    gap: 8px;
  }
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  
  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
  }
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  background-color: transparent;
  padding: 5px;
  outline: none;
  width: 100%;
  color: ${({ theme }) => theme.text};
`;
