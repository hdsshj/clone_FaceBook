import React from 'react';
import '../components/Style/PostList.css';
import StoryReal from '../components/StoryReal';
import MessageSender from '../components/MessageSender';
import Post from '../components/Post';

import { history } from '../redux/configStore';
import { useDispatch } from 'react-redux';
import { logOut} from '../redux/modules/user'
import { removeToken } from '../utills/auth';
const PostList = () => {
const TOKEN_KEY = process.env.REACT_APP_TOKEN_KEY
const dispatch = useDispatch()
  const sign = async () => {
    await dispatch(logOut())
    removeToken(TOKEN_KEY)
    history.replace('/sign')
  }
  return (
    <div className="postList">
      <StoryReal />
      <MessageSender />
      <button onClick={sign}>로그아웃</button>
      <Post 
        profile="https://img.sbs.co.kr/newimg/news/20190624/201327376_1280.jpg"
        content="짱구 보여줄게"
        insertDt="2021-10-19"
        userName="이민국"
        image="http://t1.daumcdn.net/movie/9cdbb58ce8e9c3fff8172927da67a9938af6d3d2"
      />
      <Post />
      <Post />
    </div>
  );
};

export default PostList;
