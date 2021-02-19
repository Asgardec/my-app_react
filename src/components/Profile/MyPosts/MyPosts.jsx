  import React from 'react';
  import Post from './Post/Post';
  import s from './MyPosts.module.css';

  const MyPosts = (props) => {
    let newPostElement = React.createRef();
let addPost = () => {
let text = newPostElement.current.value;
props.addPost(text);
props.updateNewPostText('');
}
    let postsElements = props.postsData.map( p=> <Post
      message={p.message}
      likesCount={p.likesCount}/> );
      let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);

      }
    return(
      <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
      <textarea onChange={onPostChange} ref={newPostElement}
        value={props.newPostText} />
      </div>
      <button onClick={ addPost}>Add Post</button>
        <div className={s.posts}>
          {postsElements}
        </div>
      </div>);

  }

  export default MyPosts;
