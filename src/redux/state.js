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


  }},
  getState(){
    return this._state;
  },
  _callSubscriber(){},
  subscribe(observer){
  this._callSubscriber = observer;
},

  dispatch(action) {
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 4,
        message: this._state.profilePage.newPostText,
        likesCount: 1
     };
      this._state.profilePage.postsData.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if(action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText =  action.newText;
      this._callSubscriber(this._state)
    }
      else if(action.type === 'UPDATE_NEW_MESSAGE_BODY') {
        this._state.dialogsPage.newMessageBody = action.body;
        this._callSubscriber(this._state)
      }
      else if(action.type === 'SEND_MESSAGE') {
      let body =  this._state.dialogsPage.newMessageBody;
      this._state.dialogsPage.newMessageBody = '';
      this._state.dialogsPage.messages.push({id: 6, message: body});

        this._callSubscriber(this._state)
      }



  }

}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => {
    return {
      type: UPDATE_NEW_POST_TEXT,
      newText: text
    }
  }

export const updateNewMessageBodyCreator = (body) => {
    return {
      type: UPDATE_NEW_MESSAGE_BODY,
      body: body
    }
  }
export const sendMessageCreator = () => ({type: SEND_MESSAGE});













export default store;
