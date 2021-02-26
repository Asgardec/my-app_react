import React from 'react';

import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from '../../../redux/state';
import Post from './Post/Post';
import s from './MyPosts.module.css';

  


  const MyPosts = (props) => {
    let newPostElement = React.createRef();
let addPost = () => {
props.dispatch(addPostActionCreator());
}
    let postsElements = props.postsData.map( p=> <Post
      message={p.message}
      likesCount={p.likesCount}/> );
      let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = (updateNewPostTextActionCreator(text));
        props.dispatch(action);

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
