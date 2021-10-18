import axios from 'axios';

const baseURL = process.env.REACT_APP_LOCAL_SERVER_URI;

const instance = axios.create({
  // 기본적으로 우리가 바라볼 서버의 주소
  baseURL: baseURL,
  headers: {
    'content-type': 'application/json;charset=UTF-8',
    accept: 'application/json',
  },
});

export default {
  // 게시물 불러오기
  GET: () => instance.get('/posts'),
  // 게시물 작성하기
  POST: (contents) => instance.post('/posts', contents),
  // 게시물 수정하기
  PUT: (id, content) => instance.put(`/posts/${id}`, content),
  // 게시물 삭제기
  DELETE: (id) => instance.delete(`/posts/${id}`),
};
