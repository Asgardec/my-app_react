  import React from 'react';
  import Post from './Post/Post';
  import s from './MyPosts.module.css';

  const MyPosts = () => {
    let postsData = [
      {id: 1, message:"Hi! How are you?", likesCount: 7},
      {id: 2, message:"Hi! Nice to see u again!", likesCount: 40},
      {id: 3, message:"Its my first Post!", likesCount: 12}
    ]
    let postsElements = postsData.map( p=><Post message={p.message} likesCount={p.likesCount}/> );
    return(
      <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
      <textarea></textarea>
      </div>
      <button>Add Post</button>
        <div className={s.posts}>
          {postsElements}
        </div>
      </div>);

  }

  export default MyPosts;
