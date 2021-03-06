import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import CodeIcon from '@mui/icons-material/Code';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CloseIcon from '@mui/icons-material/Close';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
import DeleteIcon from '@mui/icons-material/Delete';

import PostEdit from './PostEdit';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContentToAxios } from '../redux/modules/posts';

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light'
        ? 'rgb(55, 65, 81)'
        : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

export default function CustomizedMenus({ userName, currentPost }) {
  const dispatch = useDispatch()
  const loginUserName = useSelector((state) => state.user.userName);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [modalShow, setModalShow] = React.useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e) => {
    setAnchorEl(null);
  };

  const handleModal = () => {
    setModalShow(true);
  };

  const deleteContent = () => {
    dispatch(deleteContentToAxios(currentPost.postId));
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls="long-menu"
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>

      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
          <BookmarkBorderIcon />
          ????????? ??????
        </MenuItem>
        {userName === loginUserName && (
          <MenuItem onClick={handleModal} disableRipple>
            <EditIcon />
            ????????? ??????
          </MenuItem>
        )}
        <PostEdit
          show={modalShow}
          onHide={() => setModalShow(false)}
          currentPost={currentPost}
        />

        {userName === loginUserName && (
          <MenuItem onClick={deleteContent} disableRipple>
            <DeleteIcon />
            ????????? ??????
          </MenuItem>
        )}
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleClose} disableRipple>
          <NotificationsNoneIcon />??? ???????????? ?????? ?????? ??????
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <CodeIcon />
          ?????????
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleClose} disableRipple>
          <CancelPresentationIcon />
          ????????? ?????????
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <AccessTimeIcon />
          30??? ?????? {userName}??? ?????? ?????????
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <CloseIcon />
          {userName} ????????? ??????
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <FeedbackOutlinedIcon />
          ???????????? ?????? ????????? ??????
        </MenuItem>
      </StyledMenu>
    </div>
  );
}
