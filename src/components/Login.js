import React from 'react';
import { history } from '../redux/configStore';

import Signup from './Signup';

const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [modalShow, setModalShow] = React.useState(false);

  console.log(email);
  const handleChangeEmail = (email) => {
    setEmail(email.target.value);
  };

  const handleChangePassword = (password) => {
    setPassword(password.target.value);
  };

  const handleModal = () => {
    setModalShow(true);
  };

  const login = () => {
    console.log(email, password);
  };

  return (
    <React.Fragment>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <input type="email" value={email} onChange={handleChangeEmail} />
          <input
            type="password"
            value={password}
            onChange={handleChangePassword}
          />
          <button type="button" onClick={login}>
            로그인
          </button>
          <a href="/">비밀번호를 잊으셨나요?</a>
        </div>
        <hr />
        <button type="button" style={{backgroundColor:'#00a400' }} onClick={handleModal}>
          새 계정 만들기
        </button>
        <Signup show={modalShow} onHide={() => setModalShow(false)} />
    </React.Fragment>
  );
};

export default Login;
