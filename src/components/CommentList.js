import React, { useEffect } from 'react';
import CommentForm from './CommentForm';
import Comment from './Comment';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import {
  loadCurrentPostToAxios,
  loadPostsToAxios,
} from '../redux/modules/posts';

const CommentList = (props) => {
  const comment_data = useSelector((state) => state.posts.postList);
  console.log('커런트', comment_data.result);
  // const findPostId = comment_data.
  const dispatch = useDispatch();
  const commentLoad = () => {
    dispatch(loadPostsToAxios());
  };

  return (
    <React.Fragment>
      <button
        style={{ display: 'block', margin: '0px auto' }}
        onClick={commentLoad}
      >
        댓글보기
      </button>
      <Line />
      <Container>
        <h1>가로 750px</h1>
        <ChildContainer>
          <h1> 가로 650px에 패딩 16px</h1>
          <CommentForm />
          <Comment />
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
  height: 100vh;
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
