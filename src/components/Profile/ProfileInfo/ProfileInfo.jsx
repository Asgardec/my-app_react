import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (<div>
    <div>
      <img src="https://capturelandscapes.com/wp-content/uploads/2019/04/Desert-Nights.jpg" />
    </div>
    <div className={s.descriptionBlock}> Ava + description </div>
  </div>

)
}

export default ProfileInfo;
