import React from 'react';
import '../css/feed.css';
import Feeditem from './Feeditem';
const Feed = () => {
  return(
    <div className='feed-posts'>
      <Feeditem/>
      <Feeditem/>
      {/* <Feeditem/>
      <Feeditem/>
      <Feeditem/>
      <Feeditem/> */}
    </div>
  )
};

export default Feed;
