import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import CommentForm from './CommentForm';
import { removeCommentToPost } from '../redux/modules/posts';
const Comment = () => {
  const dispatch = useDispatch();
  const comment_data = useSelector((state) => state.posts.postList);
  const [TF, setTF] = React.useState(false);
  const editPost = () => {
    setTF(!TF);
  };

  //삭제
  const deletePost = (e) => {
    dispatch(removeCommentToPost(e));
  };
  console.log('스테이트', comment_data);
  return (
    <React.Fragment>
      {comment_data.map((a) => {
        return (
          <>
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
      })}
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
