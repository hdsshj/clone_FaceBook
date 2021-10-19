import React from 'react';
import '../Style/Header.css';
import { useSelector } from 'react-redux';

import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import { Avatar, IconButton } from '@mui/material';
import ViewComfyIcon from '@mui/icons-material/ViewComfy';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';

import AppBar from './AppBar';

const Header = () => {
  const isUserLogin = useSelector((state) => Boolean(state.user.email));
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="http://links.papareact.com/5me"
          alt=""
        />
        <div className="header__input">
        <SearchIcon />
          <input placeholder='Facebook 검색' type="text" />
        </div>
      </div>
      <div className="header__center">
        <div className="header__option
        header__option--active">
        <HomeIcon fontSize="large" />
        </div>
        <div className="header__option">
        <PeopleOutlineIcon fontSize="large" />
        </div>
        <div className="header__option">
        <OndemandVideoOutlinedIcon fontSize="large" />
        </div>
        <div className="header__option">
        <GroupsOutlinedIcon fontSize="large" />
        </div>
        <div className="header__option">
        <DashboardOutlinedIcon fontSize="large" />
        </div>
      </div>
      <div className="header__right">
        <div className="header__info">
          <Avatar />
          <h4>이민국</h4>
        </div>

        <IconButton>
          <ViewComfyIcon />
        </IconButton>
        <IconButton>
          <ChatBubbleOutlineIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <IconButton>
          <ArrowDropDownOutlinedIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
