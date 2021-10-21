import React from 'react';
import './Style/Post.css';
import { useDispatch } from 'react-redux';
import { Avatar } from '@mui/material';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ScreenShareOutlinedIcon from '@mui/icons-material/ScreenShareOutlined';
import CommentList from './CommentList';

import { loadCurrentPostToAxios } from '../redux/modules/posts';

const Post = (props) => {
  // console.log('포스트프롭스', props.value);
  const postInfo = props.value;
  const postId = props.value.postId;
  const [visible, setVisible] = React.useState(false);
  const commentVisible = () => {
    // if (postId === e) {
    setVisible(!visible);
    // }
    return;
  };
  //포스트 아이디를 보내서 댓글 정보 로드
  // const commentLoad = (e) => {
  //   dispatch(loadCurrentPostToAxios(e));
  // };
  return (
    <div className="post">
      <div className="post__top">
        <Avatar /* src={profile} */ className="post__avatar" />
        <div className="post__topInfo">
          <h3>{postInfo.userName}</h3>
          <p>{postInfo.insertDt}</p>
        </div>
      </div>
      <div className="post__bottom">
        <p>{postInfo.content}</p>
      </div>

      <div className="post__image">
        <img src={postInfo.image} alt="" />
      </div>

      <div className="post__options">
        <div className="post__option">
          <ThumbUpOutlinedIcon />
          <p>좋아요</p>
        </div>

        <div className="post__option">
          <ChatBubbleOutlineOutlinedIcon />
          <p
            onClick={() => {
              commentVisible(postId);
            }}
          >
            댓글 달기
          </p>
        </div>

        <div className="post__option">
          <ScreenShareOutlinedIcon />
          <p>공유하기</p>
        </div>
      </div>
      {(postId ? visible : false) ? (
        <CommentList value={postInfo}></CommentList>
      ) : null}
    </div>
  );
};

export default Post;
