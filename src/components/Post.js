import React from 'react';
import './Style/Post.css';

import { Avatar } from '@mui/material';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ScreenShareOutlinedIcon from '@mui/icons-material/ScreenShareOutlined';

const Post = ({ profile, image, userName, insertDt, content }) => {
  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profile} className="post__avatar" />
        <div className="post__topInfo">
          <h3>{userName}</h3>
          <p>{insertDt}</p>
        </div>
      </div>
      <div className="post__bottom">
        <p>{content}</p>
      </div>

      <div className="post__image">
        <img src={image} alt="" />
      </div>

      <div className="post__options">
        <div className="post__option">
          <ThumbUpOutlinedIcon />
          <p>좋아요</p>
        </div>

        <div className="post__option">
          <ChatBubbleOutlineOutlinedIcon />
          <p>댓글 달기</p>
        </div>

        <div className="post__option">
          <ScreenShareOutlinedIcon />
          <p>공유하기</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
