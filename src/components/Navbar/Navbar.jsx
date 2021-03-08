import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import {NavNews} from "./Nav/NavNews";
import {NavDialogs} from "./Nav/NavDialogs";
import {NavProfile} from "./Nav/NavProfile";
import {NavSettings} from "./Nav/NavSettings";
import {NavMusic} from "./Nav/NavMusic";
import {NavUsers} from "./Nav/NavUsers";

const Navbar = () => {
   return (<nav className={s.nav}>
      <div className={s.item}>
         <NavLink to="/Profile" activeClassName={s.active}><NavProfile/></NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
         <NavLink to="/Dialogs" activeClassName={s.active}><NavDialogs/></NavLink>
      </div>
      <div className={s.item}>
         <NavLink to="/News" activeClassName={s.active}><NavNews/></NavLink>

      </div>
      <div className={s.item}>
         <NavLink to="/Users" activeClassName={s.active}><NavUsers/></NavLink>

      </div>
      <div className={s.item}>
         <NavLink to="Music" activeClassName={s.active}><NavMusic/></NavLink>
      </div>
      <div className={s.item}>
         <NavLink to="Settings" activeClassName={s.active}><NavSettings/></NavLink>
      </div>
   </nav>);
};


export default Navbar;
