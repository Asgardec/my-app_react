import React from 'react';

import s from './Post.module.css';

const Post = (props) => {
  return(
      <div className={s.item}>
        {props.message}
      <img src="https://static.wikia.nocookie.net/under-druck/images/5/5b/Ava.jpg/revision/latest?cb=20201118200938" />
      <div>
        <span>likes</span> {props.likesCount}
      </div>
      </div>



    );

}

export default Post;
