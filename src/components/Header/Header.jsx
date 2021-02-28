import React from 'react';
import s from './Header.module.css';

const Header = () => {
   return <header className={s.header}>
      <img
         src="https://img2.freepng.ru/20180610/uls/kisspng-logo-online-and-offline-e-online-5b1d866f3dcc07.0769849515286616152531.jpg"/>
      <strong><a href="http://localhost:3000/Profile">VReacte</a> </strong>


   </header>

}

export default Header;
