import React from 'react';
import './Style/PostWrite.css';
import styled from 'styled-components';

import { Grid } from '../elements/index';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Avatar } from '@mui/material';
import FilterIcon from '@mui/icons-material/Filter';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import InsertEmoticonOutlinedIcon from '@mui/icons-material/InsertEmoticonOutlined';
import RoomIcon from '@mui/icons-material/Room';
import MicIcon from '@mui/icons-material/Mic';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const boxStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '500px',
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

const Signup = ({ show, onHide, userName }) => {
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
              fontSize="20px"
              fontWeight="bold"
              component="h2"
              textAlign="center"
              paddingBottom="10px"
            >
              게시물 만들기
            </Typography>
            <hr width="100%" />
            <div className="write__top">
              <Avatar className="post__avatar" />
              <div className="write__topInfo">
                <h3>이민국</h3>
                <p>친구만</p>
              </div>
            </div>
            <div className="write__middle">
              <form>
                <input placeholder="이민국님, 무슨 생각을 하고 계신가요?" />
              </form>
              <div className="imageBox">
                <img
                  height="38"
                  src="https://www.facebook.com/images/composer/SATP_Aa_square-2x.png"
                />
                <div />
              </div>
            </div>
            <div className="write__bottom">
              <div className="addPostBottom">
                <h4>게시물에 추가</h4>
              </div>
              <div className="addIcon">
                <div className="write__option">
                  <FilterIcon style={{ color: '#45bd62', fontSize: '24px' }} />
                </div>
                <div className="write__option">
                <LocalOfferIcon
                  style={{ color: '#1877f2', fontSize: '24px' }}
                /></div>
                <div className="write__option">
                <InsertEmoticonOutlinedIcon
                  style={{ color: '#f7b928', fontSize: '24px' }}
                /></div>
                <div className="write__option">
                <RoomIcon style={{ color: '#f5533d', fontSize: '24px' }} />
                </div>
                <div className="write__option">
                <MicIcon style={{ color: '#f02849', fontSize: '24px' }} />
                </div>
                <div className="write__option">
                <MoreHorizIcon style={{ color: '#606770' }} />
                </div>
              </div>
            </div>
            <div className="write__button">
              <button>게시</button>
              </div>
          </Grid>
        </Box>
      </Modal>
    </Grid>
  );
};

export default Signup;
