import React from 'react';

import {NavLink} from 'react-router-dom';
import s from "./Dialogs.module.css"
const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
return (
  <div className={s.dialog + ' ' + s.active}>
    <NavLink to={path}>{props.name}</NavLink>
  </div>
);
}

const Message =(props) => {
return (
  <div className={s.message}>{props.message}</div>
)
}
const Dialogs = () => {
  let dialogsData = [
    {id: 1, name: 'Aleksa'},
    {id: 2, name: 'Dmitryi'},
    {id: 3, name: 'Viktor'},
    {id: 4, name: 'Sergei'},
    {id: 5, name: 'Evgenii'},
    {id: 6, name: 'Ross'}
  ]
  let messagesData = [
    {id: 1, message:"Hi! How are you?"},
    {id: 2, message:"Where are you?"},
    {id: 3, message:"Its My first message!"},
    {id: 4, message:"Its My first message!"},
    {id: 5, message:"Its My first message!"},
    {id: 6, message:"Its My first message!"}
  ]
  let dialogsElements = dialogsData
  .map( d => <DialogItem name={d.name} id={d.id} />);
  let messagesElements = messagesData
  .map( m => <Message message={m.message} />);

  return (<div className={s.dialogs}>
    <div className={s.dialogsItems}>
      { dialogsElements }
    </div>

    <div className={s.messages}>
      {messagesElements}

    </div>
  </div>)
}
export default Dialogs;
