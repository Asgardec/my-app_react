import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';

const MyPosts = () => {
  return(
    <div>
      My posts
    <textarea></textarea>
    <button>Add Post</button>
      <div className={s.posts}>
        <Post message="Hi! Nice to see u again" likesCount="0"/>
        <Post message="Its my first Post" likesCount="40"/>

      </div>
    </div>);

}

export default MyPosts;
