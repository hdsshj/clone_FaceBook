import React from 'react';

import { Grid, Text } from '../elements/index';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const boxStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '400px',
  height: '509px',
  borderRadius: '8px',
  bgcolor: '#FFF',
  border: '0px solid #000',
  boxShadow: 24,
  p: '16px',
  outline: 0,
};

const Signup = ({ show, onHide }) => {
  const today = new Date();
  const year = today.getFullYear();
  const [selectYear, setSelectYear] = React.useState(year);

  const selectYearBox = [];

  for (let y = year - 70; y <= year + 1; y++) {
    selectYearBox.push({ value: y, label: y });
  }

  const handleChange = (event) => {
    setSelectYear(event.target.value);
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
              id="outlined-basic"
              placeholder="성(姓)"
              variant="outlined"
            />
            <TextField
              sx={{ margin: '10px 0px 5px 6px' }}
              size="small"
              fullWidth="true"
              id="outlined-basic"
              placeholder="이름(성은 제외)"
              variant="outlined"
            />
          </Grid>
          <Grid>
            <TextField
              sx={{ margin: '10px 0px 5px 0px' }}
              size="small"
              fullWidth="true"
              id="outlined-basic"
              placeholder="휴대폰 번호 또는 이메일"
              variant="outlined"
            />
            <TextField
              sx={{ margin: '10px 0px 5px 0px' }}
              size="small"
              fullWidth="true"
              id="outlined-basic"
              placeholder="새 비밀번호"
              variant="outlined"
            />
          </Grid>
          생일
          <Grid is_flex>
            <TextField
              sx={{ margin: '10px 5px 5px 0px' }}
              size="small"
              select
              value={selectYear}
              onChange={handleChange}
              fullWidth="true"
              id="outlined-basic"
              placeholder="휴대폰 번호 또는 이메일"
              variant="outlined"
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
              value={selectYear}
              onChange={handleChange}
              fullWidth="true"
              id="outlined-basic"
              placeholder="휴대폰 번호 또는 이메일"
              variant="outlined"
            >
              {selectYearBox.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              sx={{ margin: '10px 0px 5px 5px' }}
              size="small"
              select
              value={selectYear}
              onChange={handleChange}
              fullWidth="true"
              id="outlined-basic"
              placeholder="휴대폰 번호 또는 이메일"
              variant="outlined"
            >
              {selectYearBox.map((option) => (
                <MenuItem sx={{maxHeight : 10}} key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Box>
      </Modal>
    </Grid>
  );
};

export default Signup;
