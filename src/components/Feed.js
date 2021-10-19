import React from 'react';
import './Style/Feed.css';
import StoryReal from './StoryReal';
import MessageSender from './MessageSender';

const Feed = () => {
  return (
    <div className="feed">
      <StoryReal />
      <MessageSender />
    </div>
  );
};

export default Feed;
