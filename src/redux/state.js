
import { rerenderEntireTree } from '../render';

let state = {
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
  }


}
export let addPost = (postMessage) => {

 let newPost = {
   id: 4,
   message: postMessage,
   likesCount: 1
};
 state.profilePage.postsData.push(newPost);
rerenderEntireTree(state);
};
export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
}




export default state;
