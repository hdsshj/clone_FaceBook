import { produce } from 'immer';
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
  payload: { postList },
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

export const addCommentToPost = (addedComment) => ({
  type: ADD_COMMENT,
  payload: addedComment,
});

const modifyCommentToPost = (commentId, newComment) => ({
  type: MODIFY_COMMENT,
  payload: { commentId, newComment },
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

// const baseURL = process.env.REACT_APP_LOCAL_SERVER_URI;

export const loadPostsToAxios = () => async (dispatch) => {
  try {
    const res = await axiosinstance.GET();

    // const {
    //   data: {
    //     posts: { content, totalElements },
    //   },
    // } = res;
    dispatch(loadPosts(res.data));
    console.log('zzz', res.data);
  } catch (error) {
    console.error(error);
  }
};

export const loadCurrentPostToAxios = (postId) => async (dispatch) => {
  try {
    const { data } = await axiosinstance.GET(`/posts/5`);
    dispatch(loadCurrentPost(Number(postId), data));
  } catch (error) {
    console.error(error);
  }
};

export const addCommentToAxios = (comment) => async (dispatch) => {
  let addedComment;

  try {
    const { data } = await axiosinstance.POST('/comment', {
      comment,
    });
    addedComment = data;
    console.log('데이터', data);
  } catch (error) {
    console.error(error);
  }
  dispatch(addCommentToPost(addedComment));
};

export const removeCommentToAxios = (commentId) => async (dispatch) => {
  try {
    const { data } = await axiosinstance.DELETE(commentId);
    if (data.result === 'success') {
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
        draft.postList = action.payload.postList;
        break;
      }
      case LOAD_CURRENT_POST: {
        const cmtList = action.payload.data;
        const idx = cmtList.findIndex((d) => d.id === action.payload.postId);
        console.log('ㅁㅁ', cmtList[idx]);
        return { current: cmtList[idx] };
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
        console.log('액션커런트', draft.postList);
        draft.postList.unshift(action.payload);
        console.log('ADD_COMMENT', action.payload);
        break;
      }
      case MODIFY_COMMENT: {
        console.log('MODIFY_COMMENT');
        console.log(action.payload);
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
