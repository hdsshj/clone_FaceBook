import React from 'react';

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
