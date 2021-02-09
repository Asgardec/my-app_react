import React from 'react';

import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
  return <div>
    <div>
      <img src="https://capturelandscapes.com/wp-content/uploads/2019/04/Desert-Nights.jpg"/>
    </div>
    <div>ava + description</div>
    <MyPosts />
  </div>
}

export default Profile;
