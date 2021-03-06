import React from 'react';

import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import s from "./Dialogs.module.css"
import Button from "@material-ui/core/Button";


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
      .map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
   let messagesElements = state.messages
      .map(m => <Message message={m.message} key={m.id}/>);
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
            <Button onClick={onSendMessageClick} color="primary">Send</Button>
         </div>
      </div>
   </div>)
}
export default Dialogs;
