import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import CommentForm from './CommentForm';
import {
  removeCommentToAxios,
  removeCommentToPost,
} from '../redux/modules/posts';
const Comment = (props) => {
  // console.log('props', props);
  const commentInfo = props.value;
  // console.log('프롭스밸류', commentInfo.commentId);
  const dispatch = useDispatch();

  const [TF, setTF] = React.useState(false);
  const editPost = () => {
    setTF(!TF);
  };

  //삭제
  const deletePost = (e) => {
    dispatch(removeCommentToAxios(e));
  };

  return (
    <React.Fragment>
      <>
        {(commentInfo.commentId ? TF : false) ? (
          <>
            <CommentForm
              value={commentInfo.commentId}
              TF={TF}
              TFfunction={editPost}
            />

            <OptionBox>…</OptionBox>
            <div onClick={editPost}>수정</div>
            <div
              onClick={() => {
                deletePost(commentInfo.commentId);
              }}
            >
              삭제
            </div>
          </>
        ) : (
          <Container>
            <UserImg bg={commentInfo.profile} />
            <Cmt>
              <UserName>{commentInfo.userName}</UserName>
              {commentInfo.comment}
            </Cmt>

            <OptionBox>…</OptionBox>
            <div onClick={editPost}>수정</div>
            <div
              onClick={() => {
                deletePost(commentInfo.commentId);
              }}
            >
              삭제
            </div>
          </Container>
        )}
      </>
    </React.Fragment>
  );
};

const UserImg = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 25px;
  background-color: wheat;
  background-size: cover;
  background-image: url(${(props) => props.bg});
`;
const Cmt = styled.div`
  width: 0 auto;
  background-color: #eee;
  margin: 0 10px 0 20px;
  border-radius: 20px;
  padding: 8px 12px;
`;
const UserName = styled.div`
  font-weight: 600;
`;
const InputBox = styled.input`
  width: 530px;
  margin-left: 20px;
  border-radius: 20px;
  padding: 4px 8px;
`;
// const EditDelBtn = styled.div`
//   width: 200px;
//   padding: 5px;
//   border-radius: 10px;
//   opacity: 0;
// `;
const OptionBox = styled.div`
  width: 20px;
  height: 20px;
  margin: auto 0;
  border-radius: 10px;
  cursor: pointer;
  opacity: 0;

  &:hover {
    opacity: 100;
    background-color: #eee;
  }
  /* &:active  {
    opacity: 100;
  } */
`;

const Container = styled.div`
  width: 680px;
  display: flex;
  padding: 4px 0 0 16px;
  margin-bottom: 10px;
  &:hover ${OptionBox} {
    opacity: 100;
  }
`;
export default Comment;
