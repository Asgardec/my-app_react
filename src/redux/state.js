import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import sidebarReducer from './sidebarReducer';

  const ADD_POST = 'ADD-POST';
  const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
    const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
    const SEND_MESSAGE = 'SEND_MESSAGE';
  let store = {
    _state: {
      profilePage: {
      postsData: [
        {id: 1, message:"Hi! How are you?", likesCount: 7},
        {id: 2, message:"Hi! Nice to see u again!", likesCount: 40},
        {id: 3, message:"Its my first Post!", likesCount: 12}
      ],
      newPostText: ["let it begin"]

    },

    dialogsPage: {
      dialogs: [
        {id: 1, name: 'Aleksa'},
        {id: 2, name: 'Dmitryi'},
        {id: 3, name: 'Viktor'},
        {id: 4, name: 'Sergei'},
        {id: 5, name: 'Evgenii'},
        {id: 6, name: 'Ross'}
      ],
      messages: [
        {id: 1, message:"Hi! How are you?"},
        {id: 2, message:"Where are you?"},
        {id: 3, message:"Its My first message!"},
        {id: 4, message:"Its My first message!"},
        {id: 5, message:"Its My first message!"},

      ],
      newMessageBody: ""


  },
    sidebar: {}
},
  getState(){
    return this._state;
  },
  _callSubscriber(){},
  subscribe(observer){
  this._callSubscriber = observer;
},

  dispatch(action) {
      this._state.profilePage = profileReducer(this._state.profilePage, action);
      this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
      this._state.sidebar = sidebarReducer(this._state.sidebar, action);

      this._callSubscriber(this._state);
      }



  }

export default store;
