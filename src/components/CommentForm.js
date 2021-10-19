import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addCommentToAxios, addCommentToPost } from '../redux/modules/posts';

const CommentForm = (props) => {
  const dispatch = useDispatch();
  const [comment, setComment] = React.useState();
  //제출은 엔터키
  const enterKey = (e) => {
    if (e.key === 'Enter') {
      console.log('코멘트', comment);
      // postid도 넘겨야함 -- 후에 추가
      dispatch(addCommentToAxios(comment));
      setComment('');
    }
  };

  return (
    <React.Fragment>
      <Container>
        <UserImg />
        <InputBox
          type="text"
          value={comment}
          onKeyUp={enterKey}
          onChange={(e) => {
            setComment(e.target.value);
          }}
        />
      </Container>
    </React.Fragment>
  );
};

const Container = styled.div`
  width: 680px;
  display: flex;
  padding: 4px 16px;
  margin-bottom: 10px;
`;

const UserImg = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 25px;
  background-color: wheat;
`;
const InputBox = styled.input`
  width: 530px;
  margin-left: 20px;
  border-radius: 20px;
  padding: 8px 12px;
`;
export default CommentForm;
