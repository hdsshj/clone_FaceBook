import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Comment = () => {
  const comment_data = useSelector((state) => state.posts.postList);
  console.log('스테이트', comment_data);
  return (
    <React.Fragment>
      {comment_data.map((a) => {
        return (
          <Container>
            <UserImg>
              <img src={a.profile} />
            </UserImg>
            <Cmt>
              <UserName>{a.userName}</UserName>
              {a.content}
            </Cmt>
          </Container>
        );
      })}
    </React.Fragment>
  );
};

const Container = styled.div`
  width: 680px;
  display: flex;
  padding: 4px 0 0 16px;
  margin-bottom: 10px;
`;
const UserImg = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 25px;
  background-color: wheat;
`;
const Cmt = styled.div`
  width: 0 auto;
  background-color: #eee;
  margin-left: 20px;
  border-radius: 20px;
  padding: 8px 12px;
`;
const UserName = styled.div`
  font-weight: 600;
`;

export default Comment;
