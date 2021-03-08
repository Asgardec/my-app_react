import React from 'react';
import s from './Header.module.css';

const Header = () => {
   return <header className={s.header} sticky-top>
      <ul className='head'>

         <div>
            {/*<li><img
               src="https://img2.freepng.ru/20180610/uls/kisspng-logo-online-and-offline-e-online-5b1d866f3dcc07.0769849515286616152531.jpg"/>
            </li>*/}
         </div>
         <div>
               <strong><a href="http://localhost:3000/Profile">VReacte</a> </strong>
         </div>
      </ul>

   </header>

}

export default Header;
