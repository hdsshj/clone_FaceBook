import { Avatar } from '@mui/material';
import React from 'react';
import './Style/Story.css';

const Story = ({ image, profileSrc, title }) => {
  return (
    <div className="story">
      <Avatar src={profileSrc} />
      <h4>{title}</h4>
    </div>
  );
};

export default Story;
