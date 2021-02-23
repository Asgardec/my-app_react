import React from 'react';

import s from './Post.module.css';

const Post = (props) => {
  return(
      <div className={s.item}>
        {props.message}
      <img src="https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg" />
      <div>
        <span>likes</span> {props.likesCount}
      </div>
      </div>



    );

}

export default Post;
