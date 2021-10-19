import React from 'react';
import Story from './Story';

const StoryReal = () => {
  return (
    <div className="storyReal">
      <Story
        image="https://cdn.pixabay.com/photo/2016/10/22/05/02/photo-session-in-the-body-1759810_960_720.jpg"
        title="고민"
      />
      <Story 
        image="https://cdn.pixabay.com/photo/2021/08/31/11/58/woman-6588614_960_720.jpg"
        title="나비" />
      <Story
        image="https://cdn.pixabay.com/photo/2021/08/14/20/44/stones-6546233_960_720.jpg"
        title="돌" />
      <Story
        image="https://cdn.pixabay.com/photo/2021/10/08/15/48/knight-6691692_960_720.jpg"
        title="기사" />
      <Story
        image="https://cdn.pixabay.com/photo/2021/08/14/17/46/tucan-6545867_960_720.jpg"
        title="투칸" />
    </div>
  );
};

export default StoryReal;
