import { produce } from 'immer';
import { act } from 'react-dom/test-utils';
import axiosinstance from '../../api/axiosinstance';
//posts
const LOAD_POST_LIST = 'posts/LOAD_POST_LIST';
const LOAD_CURRENT_POST = 'posts/LOAD_CURRENT_POST';
const CREATE = 'posts/CREATE';
const UPDATE = 'posts/UPDATE';
const DELETE = 'posts/DELETE';

//comment
const ADD_COMMENT = 'posts/ADD_COMMENT';
const MODIFY_COMMENT = 'posts/MODIFY_COMMENT';
const REMOVE_COMMENT = 'posts/REMOVE_COMMENT';

//action creater

const loadPosts = (postList) => ({
  type: LOAD_POST_LIST,
  payload: postList,
});

const loadCurrentPost = (postId, data) => ({
  type: LOAD_CURRENT_POST,
  payload: { postId, data },
});

const createPost = (newPost) => ({
  type: CREATE,
  payload: newPost,
});

const updatePost = (updatedPost) => ({
  type: UPDATE,
  payload: updatedPost,
});

const deletePost = (postId) => ({
  type: DELETE,
  payload: postId,
});

export const addCommentToPost = (comment, postId) => ({
  type: ADD_COMMENT,
  payload: comment,
  postId,
});

export const modifyCommentToPost = (commentId, comment) => ({
  type: MODIFY_COMMENT,
  payload: { commentId, comment },
});

export const removeCommentToPost = (commentId) => ({
  type: REMOVE_COMMENT,
  payload: commentId,
});

// in postsReducer, initialState
// const initialPostState = {
//   postList: [
//     {
//       // 민국님
//       id: 'postId',
//       content: 'content',
//       userName: 'userName',
//       insertDt: 'insertDt',
//       profile: 'profile',
//       image: 'image',
//       // 지훈님
//       comment: [
//         {
//           id: 'commnetId',
//           comment: 'comment',
//           userName: 'userName',
//           insertDt: 'insertDt',
//           profile: 'profile',
//         },
//       ],
//       commentCnt: 'commentCnt',
//       likeCnt: 'likeCnt',
//     },
//   ],
// };

const initialState = {
  postList: [],
  current: {},
};

export const addCommentToAxios = (comment, postId) => async (dispatch) => {
  console.log('우석빌런', comment, postId);

  try {
    const { data } = await axiosinstance.POST(comment, postId);
    console.log('데이터', data);
  } catch (error) {
    console.error(error);
  }
  dispatch(addCommentToPost(comment, postId));
};

// 게시글 리스트 로드
export const loadPostsToAxios = () => async (dispatch) => {
  try {
    const res = await axiosinstance.GET();
    // const {
    //   data: {
    //     posts: { content, totalElements },
    //   },
    // } = res;
    dispatch(loadPosts(res.data));
    // console.log('게시글 리스트 정보', res.data);
  } catch (error) {
    console.error(error);
  }
};

export const loadCurrentPostToAxios = (postId) => async (dispatch) => {
  try {
    const { data } = await axiosinstance.GET();
    dispatch(loadCurrentPost(Number(postId), data));
  } catch (error) {
    console.error(error);
  }
};

// export const addCommentToAxios = (postId, comment) => async (dispatch) => {
//   let addedComment;

//   try {
//     const { data } = await axiosinstance.POST(postId, comment);
//     addedComment = data;
//     console.log('데이터', data);
//   } catch (error) {
//     console.error(error);
//   }
//   dispatch(addCommentToPost(addedComment));
// };

export const modifyCommentToAxios =
  (commentId, comment) => async (dispatch) => {
    let payload = { commentId, comment };
    try {
      const { data } = await axiosinstance.PATCH(commentId, comment);
      console.log('수정 데이터', data);
      console.log('수정 데이터2', data.comment);
      if (data.result === 'success') {
        dispatch(modifyCommentToPost(commentId, data.comment));
      }
    } catch (error) {
      console.error(error);
    }
  };

export const removeCommentToAxios = (commentId) => async (dispatch) => {
  console.log('삭제아이디', commentId);
  try {
    const { data } = await axiosinstance.DELETE(commentId);
    console.log('데이타확인', data);
    if (data.result === 'success') {
      console.log('성공확인', data.result);
      dispatch(removeCommentToPost(commentId));
    }
  } catch (error) {
    console.log(error);
  }
};

export default function postsReducer(state = initialState, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case LOAD_POST_LIST: {
        //게시글 리스트 로드
        draft.postList = action.payload.posts;
        break;
      }
      case LOAD_CURRENT_POST: {
        console.log('로드커런트', action.payload);
        const idx = action.payload.data.posts.findIndex(
          (d) => d.postId === action.payload.postId,
        );
        console.log('아이디엑스', idx);
        const commentList = action.payload.data.posts[idx].comment;
        console.log('ㅋㅋ', commentList);
        return draft.postList.push(commentList);
      }
      case CREATE: {
        console.log('CREATE');
        console.log(action.payload);
        break;
      }
      case UPDATE: {
        console.log('UPDATE');
        console.log(action.payload);
        break;
      }
      case DELETE: {
        console.log('DELETE');
        console.log(action.payload);
        break;
      }
      case ADD_COMMENT: {
        console.log('댓글 추가', action.payload);
        break;
      }
      case MODIFY_COMMENT: {
        console.log('수정한 댓글', action.payload);
        const commentId = action.payload.commentId;
        const newComment = action.payload.comment;
        // console.log('포스트리스트', state.postList);
        // 파인드 인덱스 돌려서 각 포스트 중 조건에 맞는 객체만 출력
        const list = state.postList;
        const list2 = list.findIndex((a) => {
          return a.postId === commentId;
        });
        console.log('리스트', list);
        console.log('리스트2', list2);
        // const index = list.findIndex(
        //   (a) => a.commentId === action.payload.commentId,
        // );

        // console.log('인덱스', index);
        // console.log('a', list[index]);
        // draft.current.comment[index] = newComment;
        break;
      }
      case REMOVE_COMMENT: {
        //리덕스에서 삭제
        const newComment = draft.postList.filter((a) => {
          return a.id !== action.payload;
        });
        return { postList: newComment };
      }
      default:
        break;
    }
  });
}
