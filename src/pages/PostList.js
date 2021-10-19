import React from 'react';
import { Grid } from '../elements/index'
import { loadPostsToAxios } from '../redux/modules/posts';
import { useSelector, useDispatch } from 'react-redux'

import styled from 'styled-components';

import Post from '../components/Post';


const PostList = () => {
  return (
    <Post/>
    )
};



export default PostList;
