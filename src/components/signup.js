import React from 'react';

import { Grid, Text } from '../elements/index';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '432px',
  height: '509px',
  borderRadius: '8px',
  bgcolor: 'backgroun d.paper',
  border: '0px solid #000',
  boxShadow: 24,
  p: 4,
  outline: 0,
};


const Signup = ({ show, onHide }) => {
  return (
    <Grid>
      <Modal
        open={show}
        onClose={onHide}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
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
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </Grid>
  );
}

export default Signup;
