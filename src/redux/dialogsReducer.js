const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
   dialogs: [
      {id: 1, name: 'Aleksa'},
      {id: 2, name: 'Dmitryi'},
      {id: 3, name: 'Viktor'},
      {id: 4, name: 'Sergei'},
      {id: 5, name: 'Evgenii'},
      {id: 6, name: 'Ross'}
   ],
   messages: [
      {id: 1, message: "Hi! How are you?"},
      {id: 2, message: "Where are you?"},
      {id: 3, message: "Its My first message!"},
      {id: 4, message: "Its My first message!"},
      {id: 5, message: "Its My first message!"},

   ],
   newMessageBody: ""


};
const dialogsReducer = (state = initialState, action) => {
   let uniqueId = Math.random() * (10 - 1) + 1;
   switch (action.type) {
      case UPDATE_NEW_MESSAGE_BODY:
         return {
            ...state,
            newMessageBody: action.body
         }

      case SEND_MESSAGE:
         let body = state.newMessageBody;
         return {
            ...state,
            newMessageBody: '',
            messages: [...state.messages, {id: uniqueId, message: body}]
         }


      default:
         return state;

   }

}
export const updateNewMessageBodyCreator = (body) => {
   return {
      type: UPDATE_NEW_MESSAGE_BODY,
      body: body
   }
}
export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export default dialogsReducer;
