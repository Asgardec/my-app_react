  import React from 'react';
  import Post from './Post/Post';
  import s from './MyPosts.module.css';

  const MyPosts = () => {
    let PostsData = [
      {id: 1, message:"Hi! How are you?", likesCount: 7},
      {id: 2, message:"Hi! Nice to see u again!", likesCount: 40},
      {id: 3, message:"Its my first Post!", likesCount: 12}
    ]
    return(
      <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
      <textarea></textarea>
      </div>
      <button>Add Post</button>
        <div className={s.posts}>
          <Post message={PostsData[0].message} likesCount={PostsData[0].likesCount}/>
          <Post message={PostsData[1].message} likesCount={PostsData[1].likesCount}/>
          <Post message={PostsData[2].message} likesCount={PostsData[2].likesCount}/>
        </div>
      </div>);

  }

  export default MyPosts;
