import React from 'react';
import '../components/Style/PostList.css';
import StoryReal from '../components/StoryReal';
import MessageSender from '../components/MessageSender';
import Post from '../components/Post';
import { useDispatch, useSelector } from 'react-redux';
import { loadPostsToAxios } from '../redux/modules/posts';

const PostList = () => {
  const postList = useSelector((state) => state.posts.postList);
  console.log('포스트리', postList);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(loadPostsToAxios());
  }, []);
  return (
    <div className="postList">
      <StoryReal />
      <MessageSender />
      {postList &&
        postList.map((p) => {
          console.log('피', p);
          return <Post value={p} />;
        })}
      {/* <Post
        profile="https://img.sbs.co.kr/newimg/news/20190624/201327376_1280.jpg"
        content="짱구 보여줄게"
        insertDt="2021-10-19"
        userName="이민국"
        image="http://t1.daumcdn.net/movie/9cdbb58ce8e9c3fff8172927da67a9938af6d3d2"
      /> */}
    </div>
  );
};

export default PostList;
