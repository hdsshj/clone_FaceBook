import React from 'react';
import styled from 'styled-components';

import { Grid } from '../elements/index';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import SelectBox from '../elements/SelectBox';
import { PasswordTwoTone } from '@mui/icons-material';

const boxStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '400px',
  borderRadius: '8px',
  bgcolor: '#FFF',
  border: '0px solid #000',
  boxShadow: 24,
  p: '16px',
  outline: 0,
};

const selectBoxOption = {
  width: '100%',
  margin: '10px 0px',
};

const Signup = ({ show, onHide }) => {
  // 이름
  const [lastName, setLastName] = React.useState('')
  const [firstName, setFirstName] = React.useState('')

  const userName = lastName + firstName
  
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  // 휴대폰 번호 또는 이메일
  const [email, setEmail] = React.useState('')

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  
  // 새 비밀번호
  const [password, setPassword] = React.useState('')

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // 생일
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  const [selectYear, setSelectYear] = React.useState(year);
  const [selectMonth, setSelectMonth] = React.useState(month + '월');
  const [selectDay, setSelectDay] = React.useState(day + '일');

  const selectYearBox = [];
  const selectMonthBox = [];
  const selectDayBox = [];
  const birthday = `${selectYear}-${selectMonth}-${selectDay}`

  for (let y = year - 70; y <= year + 1; y++) {
    selectYearBox.push({ value: y, label: y });
  }

  for (let m = 1; m <= 12; m++) {
    selectMonthBox.push({ value: m + '월', label: m + '월' });
  }

  for (let d = 1; d <= 31; d++) {
    selectDayBox.push({ value: d + '일', label: d + '일' });
  }

  const handleYearChange = (event) => {
    setSelectYear(event.target.value);
  };

  const handleMonthChange = (event) => {
    setSelectMonth(event.target.value);
  };

  const handleDayChange = (event) => {
    setSelectDay(event.target.value);
  };

  // 성별
  const [gender, setGender] = React.useState('');

  const handleGenderSelect = (event) => {
    setGender(event.target.value);
  };

  const signUp = () => {
    console.log({userName, email, birthday,gender ,profile,pw : password})
  }

  // 프로필
  const [profile, setProfile] = React.useState('')

  const handleProfileChange = (event) => {
    setProfile(event.target.value);
  };
  

  return (
    <Grid>
      <Modal
        open={show}
        onClose={onHide}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={boxStyle}>
          <Grid>
            <Typography
              id="modal-modal-title"
              fontSize="32px"
              fontWeight="bold"
              component="h2"
            >
              가입하기
            </Typography>
            <Typography id="modal-modal-title" fontSize="15px" component="h2">
              빠르고 쉽습니다.
            </Typography>
            <hr width="100%" />
          </Grid>
          <Grid is_flex>
            <TextField
              sx={{ margin: '10px 6px 5px 0px' }}
              size="small"
              fullWidth="true"
              placeholder="성(姓)"
              variant="outlined"
              value={lastName}
              onChange={handleLastNameChange}
            />
            <TextField
              sx={{ margin: '10px 0px 5px 6px' }}
              size="small"
              fullWidth="true"
              placeholder="이름(성은 제외)"
              variant="outlined"
              value={firstName}
              onChange={handleFirstNameChange}
            />
          </Grid>
          <Grid>
            <TextField
              sx={{ margin: '10px 0px 5px 0px' }}
              size="small"
              fullWidth="true"
              placeholder="휴대폰 번호 또는 이메일"
              variant="outlined"
              value={email}
              onChange={handleEmailChange}
            />
            <TextField
              sx={{ margin: '10px 0px 5px 0px' }}
              size="small"
              fullWidth="true"
              placeholder="새 비밀번호"
              variant="outlined"
              value={password}
              onChange={handlePasswordChange}
            />
          </Grid>
          생일
          <Grid is_flex>
            <TextField
              sx={{ margin: '10px 5px 5px 0px' }}
              size="small"
              select
              fullWidth="true"
              variant="outlined"
              value={selectYear}
              onChange={handleYearChange}
            >
              {selectYearBox.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              sx={{ margin: '10px 5px 5px 5px' }}
              size="small"
              select
              fullWidth="true"
              variant="outlined"
              value={selectMonth}
              onChange={handleMonthChange}
            >
              {selectMonthBox.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              sx={{ margin: '10px 0px 5px 5px' }}
              size="small"
              select
              fullWidth="true"
              variant="outlined"
              value={selectDay}
              onChange={handleDayChange}
            >
              {selectDayBox.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <FormControl component="fieldset">
            <FormLabel component="legend">성별</FormLabel>
            <RadioBox>
              <label htmlFor="gender">
                여성
                <input
                  id="여성"
                  name="여성"
                  value="여성"
                  type="radio"
                  checked={gender === '여성'}
                  onChange={handleGenderSelect}
                />
                &nbsp;
              </label>
              <label htmlFor="gender">
                남성
                <input
                  id="남성"
                  name="남성"
                  value="남성"
                  type="radio"
                  checked={gender === '남성'}
                  onChange={handleGenderSelect}
                />
                &nbsp;
              </label>
              <label htmlFor="gender">
                직접선택
                <input
                  id="직접선택"
                  name="직접선택"
                  value="직접선택"
                  type="radio"
                  checked={gender === '직접선택'}
                  onChange={handleGenderSelect}
                />
                &nbsp;
              </label>
            </RadioBox>
          </FormControl>
          <SelectBox option={selectBoxOption} />
          <p>선택한 항목이 모든 사람에게 공개됩니다.</p>
          <TextField
            sx={{ margin: '10px 0px 5px 0px' }}
            size="small"
            fullWidth="true"
            id="outlined-basic"
            placeholder="성별(선택 사항)"
            variant="outlined"
          />
          <Grid>
            <p style={{ fontSize: '11px', color: 'gray' }}>
              가입하기 버튼을 클릭하면 Facebook의 약관, 데이터 정책 및 쿠키
              정책에 동의하게 됩니다. Facebook으로부터 SMS 알림을 받을 수 있으며
              알림은 언제든지 옵트 아웃할 수 있습니다.
            </p>
          </Grid>
          <Grid>
            <input type='file' value={profile} onChange={handleProfileChange}/>
          </Grid>
          <Grid>
            <GreenBtn onClick={signUp}>가입하기</GreenBtn>
          </Grid>
        </Box>
      </Modal>
    </Grid>
  );
};

const RadioBox = styled.div`
  border: '1px solid';
  display: 'inline-block';
  fontsize: 15px;
  lineheight: 36px;
  padding: 0px 28px 0px 10px;
  width: 100%;
  color: #1c1e21;
  boxsizing: border-box;
`;

const GreenBtn = styled.button`
  height: 36px;
  display: block;
  font-size: 16px;
  font-weight: 900;
  color: #fff;
  background-color: #00a400;
  border: 0px;
  border-radius: 7px;
  width: 50%;
  margin: 20px auto;
`;

export default Signup;
