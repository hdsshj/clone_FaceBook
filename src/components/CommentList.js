import React, { useEffect } from 'react';
import CommentForm from './CommentForm';
import Comment from './Comment';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const CommentList = (props) => {
  // console.log('프롭스', props.value);
  // const comment_data = useSelector((state) => state.posts.postList);
  const comment_data = props.value.comment;
  console.log('코멘트데이터', comment_data);

  return (
    <React.Fragment>
      <Line />
      <Container>
        <h1>가로 750px</h1>
        <ChildContainer>
          <h1> 가로 650px에 패딩 16px</h1>
          <CommentForm value={props.value} />
          {comment_data &&
            comment_data.map((a) => {
              return (
                <div>
                  <Comment id={a.commentId} value={a} />
                </div>
              );
            })}
        </ChildContainer>
      </Container>
    </React.Fragment>
  );
};

const Line = styled.hr`
  width: 682px;
  margin: 0 auto;
`;
const Container = styled.div`
  width: 750px;
  background-color: #eee;
  margin: 0 auto;
`;
const ChildContainer = styled.div`
  width: 650px;
  height: auto px;
  background-color: #1877f2;
  color: black;
  padding: 0 16px 16px 16px;
  margin: 0 auto;
`;
export default CommentList;
