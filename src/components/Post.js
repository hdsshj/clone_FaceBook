import React from 'react';
import {Grid} from '../elements/index'

import PostCard from '../elements/PostCard';

import styled from 'styled-components';

const Post = () => {
  return (
    <Container>
      <PostCard padding="16px">
        <Grid is_flex>
          <PostUserInfo>
            <ProfileImage />
            <div>UserName</div>
          </PostUserInfo>
          <Grid height="36px" width="36px">
            <PostUdButton>~~~</PostUdButton>
          </Grid>
        </Grid>
        <PostContent>ertertertretE</PostContent>
      <PostImage/>
      </PostCard>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 1183px;
  padding: 0px 32px;
  justify-content: center;
`;

const PostUserInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 0px 16px 0px;
`;

const ProfileImage = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 40px;
  background-color: blue;
`;

const PostUdButton = styled.div`
  height: 36px;
  width: 36px;
  border-radius: 18px;
  border: none;
  &:hover {
    background-color: #d2d4d7;
  }
`;

const PostContent = styled.div``;

const PostImage = styled.div`
  background-image: url("https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-176213403491/media/magazine_img/magazine_372/c89e5703-03ee-4dcb-9f4e-68cf0a1950f3.jpg");
  background-size : cover;
  background-position : center;
`;

export default Post;
