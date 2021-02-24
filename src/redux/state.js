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
      messages: [
        {id: 1, message:"Hi! How are you?"},
        {id: 2, message:"Where are you?"},
        {id: 3, message:"Its My first message!"},
        {id: 4, message:"Its My first message!"},
        {id: 5, message:"Its My first message!"},
        {id: 6, message:"Its My first message!"}
      ],
      dialogs: [
        {id: 1, name: 'Aleksa'},
        {id: 2, name: 'Dmitryi'},
        {id: 3, name: 'Viktor'},
        {id: 4, name: 'Sergei'},
        {id: 5, name: 'Evgenii'},
        {id: 6, name: 'Ross'}
      ]

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

  }

}










export default store;
