import React from 'react';
import {NavLink} from 'react-router-dom';
import s from "./Dialogs.module.css"

const Dialogs = () => {
  return (<div className={s.dialogs}>
    <div className={s.dialogsItems}>
      <div className={s.dialog + ' ' + s.active}>
        <NavLink to="/dialogs/1">Aleksa</NavLink>
      </div>
      <div className={s.dialog}>
        <NavLink to="/dialogs/2">Dmitrii</NavLink>
      </div>
      <div className={s.dialog}>
        <NavLink to="/dialogs/3">Viktor</NavLink>
      </div>
      <div className={s.dialog}>
        <NavLink to="/dialogs/4">Sergei</NavLink>
      </div>
      <div className={s.dialog}>
        <NavLink to="/dialogs/5">Evgenii</NavLink>
      </div>
      <div className={s.dialog}>
        <NavLink to="/dialogs/6">Ross</NavLink>
      </div>
    </div>

    <div className={s.messages}>
      <div className={s.message}>Hi! how are you?</div>
      <div className={s.message}>Where are you?</div>
      <div className={s.message}>Its My first message!</div>
    </div>
  </div>);
}

export default Dialogs;
