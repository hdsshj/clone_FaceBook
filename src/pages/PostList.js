import React from 'react';
import { Grid } from '../elements/index'
import { loadPostsToAxios } from '../redux/modules/posts';
import { useSelector, useDispatch } from 'react-redux'

import styled from 'styled-components';

import Post from '../components/Post';
import SideMenu from '../components/SideMenu';

const PostList = () => {
  return (
  <Sections>
    <SideMenu/>
    <Post/>
  </Sections>
    )
};

const Sections = styled.div`
  display: flex;
  width: 100%;
  background-color: #f0f2f5;
`;

export default PostList;
