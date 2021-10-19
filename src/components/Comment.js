import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import CommentForm from './CommentForm';
import {
  removeCommentToAxios,
  removeCommentToPost,
  loadPostsToAxios,
} from '../redux/modules/posts';
const Comment = (props) => {
  const dispatch = useDispatch();
  const comment_data = useSelector((state) => state.posts.postList);
  console.log('게시글데이터', comment_data);
  // const cmtId = comment_data.map((a) => {
  //   return a.id;
  // });
  // console.log('게시글의 아이디', cmtId);

  const [TF, setTF] = React.useState(false);
  const editPost = () => {
    setTF(!TF);
  };

  //삭제
  const deletePost = (e) => {
    dispatch(removeCommentToAxios(e));
  };
  console.log('스테이트', comment_data);

  const commentLoad = (e) => {
    console.log('이이', e);
    dispatch(loadPostsToAxios());
  };
  return (
    <React.Fragment>
      {/* {comment_data.map((a) => {
        return (
          <>
            <button
              style={{ display: 'block', margin: '0px auto' }}
              onClick={() => {
                commentLoad();
              }}
            >
              아이디보기
              {a.id}
            </button>
            {(comment_data.find((c) => c.id === a.id) ? TF : false) ? (
              <>
                <CommentForm />

                <OptionBox>…</OptionBox>
                <div onClick={editPost}>수정</div>
                <div
                  onClick={() => {
                    deletePost(a.id);
                  }}
                >
                  삭제
                </div>
              </>
            ) : (
              <Container>
                <UserImg bg={a.profile} />
                <Cmt>
                  <UserName>{a.userName}</UserName>
                  {a.content}
                </Cmt>

                <OptionBox>…</OptionBox>
                <div onClick={editPost}>수정</div>
                <div
                  onClick={() => {
                    deletePost(a.id);
                  }}
                >
                  삭제
                </div>
              </Container>
            )}
          </>
        );
      })} */}
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
