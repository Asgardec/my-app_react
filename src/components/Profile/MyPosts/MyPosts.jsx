import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';
import Button from "@material-ui/core/Button";


const MyPosts = (props) => {
   let newPostElement = React.createRef();
   let onAddPost = () => {
      props.addPost();
   }
   let postsElements = props.postsData.map(p => <Post
      message={p.message} key={p.id}
      likesCount={p.likesCount}/>);
   let onPostChange = () => {
      let text = newPostElement.current.value;
      props.updateNewPostText(text);

   }
   return (
      <div className={s.postsBlock}>
         <h3>My posts</h3>
         <div>
      <textarea onChange={onPostChange} ref={newPostElement}
                value={props.newPostText}/>
         </div>
         <Button onClick={onAddPost} variant="contained" color="primary">
            Add post
         </Button>
         <div className={s.posts}>
            {postsElements}
         </div>
      </div>);

}

export default MyPosts;
