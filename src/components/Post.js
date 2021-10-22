import React from 'react';
import './Style/Post.css';
import { useDispatch } from 'react-redux';
import { Avatar } from '@mui/material';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ScreenShareOutlinedIcon from '@mui/icons-material/ScreenShareOutlined';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import CommentList from './CommentList';

import { deleteContentToAxios, loadCurrentPostToAxios, likeToAxios } from '../redux/modules/posts';

const Post = (props) => {
  const dispatch = useDispatch();
  // console.log('포스트프롭스', props.value);
  const postInfo = props.value;
  const postId = props.value.postId;
  const [visible, setVisible] = React.useState(false);

  const deleteContent = (e) => {
    dispatch(deleteContentToAxios(e))
  }

  const commentVisible = () => {
    // if (postId === e) {
    setVisible(!visible);
  };
  //좋아요
  const [color, setColor] = React.useState(null);
  const likeColor = (e) => {
    console.log('이이이이이', e);
    if (color === null) {
      setColor({ color: 'blue' });
      dispatch(likeToAxios({ postId: e, like: true }));
    } else {
      setColor(null);
      dispatch(likeToAxios({ postId: e, like: false }));
    }
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
        <div className="post__delete" onClick={() => {deleteContent(postId)}} >
          <HighlightOffIcon/>
        </div>
      </div>
      <div className="post__bottom">
        <p>{postInfo.content}</p>
      </div>

      <div className="post__image">
        <img src={postInfo.image} alt="" />
      </div>

      <div className="post__options">
        <div className="post__option" style={color}>
          <ThumbUpOutlinedIcon />
          <p
            onClick={() => {
              console.log('야호');
              likeColor(postId);
            }}
          >
            좋아요
          </p>
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
