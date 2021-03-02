import React from 'react';

import {
   sendMessageCreator,
   updateNewMessageBodyCreator
} from '../../redux/dialogsReducer';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import s from "./Dialogs.module.css"


const Dialogs = (props) => {
   let state = props.dialogsPage;
   let onSendMessageClick = () => {
      props.sendMessage();
   }

   let onNewMessageChange = (event) => {
      let body = event.target.value;
      props.updateNewMessageBody(body)
   }
   let dialogsElements = state.dialogs
      .map(d => <DialogItem name={d.name} id={d.id}/>);
   let messagesElements = state.messages
      .map(m => <Message message={m.message}/>);
   let newMessageBody = state.newMessageBody;

   return (<div className={s.dialogs}>
      <div className={s.dialogsItems}>
         {dialogsElements}
      </div>

      <div className={s.messages}>
         <div>{messagesElements}</div>
         <div><textarea value={newMessageBody}
                        onChange={onNewMessageChange}
                        placeholder='Enter your message'></textarea></div>
         <div>
            <button onClick={onSendMessageClick}>Send</button>
         </div>
      </div>
   </div>)
}
export default Dialogs;
