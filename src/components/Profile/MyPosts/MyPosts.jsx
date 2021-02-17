  import React from 'react';
  import Post from './Post/Post';
  import s from './MyPosts.module.css';

  const MyPosts = (props) => {

    let postsElements = props.postsData.map( p=> <Post message={p.message} likesCount={p.likesCount}/> );
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
