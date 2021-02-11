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
  let DialogsData = [
    {id: 1, name: 'Aleksa'},
    {id: 2, name: 'Dmitryi'},
    {id: 3, name: 'Viktor'},
    {id: 4, name: 'Sergei'},
    {id: 5, name: 'Evgenii'},
    {id: 6, name: 'Ross'}
  ]

  let MessagesData = [
    {id: 1, message:"Hi! How are you?"},
    {id: 2, message:"Where are you?"},
    {id: 3, message:"Its My first message!"},
    {id: 4, message:"Its My first message!"},
    {id: 5, message:"Its My first message!"},
    {id: 6, message:"Its My first message!"}
  ]
  return (<div className={s.dialogs}>
    <div className={s.dialogsItems}>
      <h4>
      <DialogItem name={DialogsData[0].name} id={DialogsData[0].id} />
      </h4>
      <DialogItem name={DialogsData[1].name} id={DialogsData[1].id} />
      <DialogItem name={DialogsData[2].name} id={DialogsData[2].id} />
      <DialogItem name={DialogsData[3].name} id={DialogsData[3].id} />
      <DialogItem name={DialogsData[4].name} id={DialogsData[4].id} />
      <DialogItem name={DialogsData[5].name} id={DialogsData[5].id} />
    </div>

    <div className={s.messages}>
      <h4><Message message ={MessagesData[0].message} id={MessagesData[0].id}/></h4>
      <Message message ={MessagesData[1].message} id={MessagesData[1].id}/>
      <Message message ={MessagesData[2].message} id={MessagesData[2].id}/>
      <Message message ={MessagesData[3].message} id={MessagesData[3].id}/>
      <Message message ={MessagesData[4].message} id={MessagesData[4].id}/>
      <Message message ={MessagesData[5].message} id={MessagesData[5].id}/>

    </div>
  </div>)
}
export default Dialogs;
