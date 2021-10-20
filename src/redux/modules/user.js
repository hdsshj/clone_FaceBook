import { produce } from 'immer';
import axios from 'axios';

export const LOGIN = 'user/LOGIN';
export const LOG_OUT = 'user/LOG_OUT';
export const AUTHORIZED = 'user/AUTHORIZED';

export const login = (payload) => ({
  type: LOGIN,
  payload,
});

const logOut = () => ({ type: LOG_OUT });

const authorize = (email, nickname) => ({
  type: AUTHORIZED,
  payload: { email, nickname },
});

const initialState = {
  email: '',
  username: '',
  isAuthorized: false,
};

// 미들 웨어
const baseURL = process.env.REACT_APP_REMOTE_SERVER_URI;


export const loginToServer = (email, pw) => async (dispatch) => {
  try {
    const res = await axios.post(`${baseURL}/api/login`, { email, pw });
    const { data } = res;

    if (data.result === 'fail') {
      return data;
    }
    console.log(data)
    // dispatch(login({ email: data.email, nickname: data.nickname }));

    return data;
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
};

export const signUpToServer = () => async (dispatch) => {
  
}

export default function userReducer(state = initialState, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case LOGIN:
      case AUTHORIZED: {
        console.log('AUTHORIZED');
        console.log(action.payload);
        break;
      }
      case LOG_OUT: {
        console.log('LOG_OUT');
        console.log(action.payload);
        break;
      }
      default:
        break;
    }
  });
}
