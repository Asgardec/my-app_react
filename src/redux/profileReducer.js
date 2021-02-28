const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
let initialState = {
   postsData: [
      {id: 1, message: "Hi! How are you?", likesCount: 7},
      {id: 2, message: "Hi! Nice to see u again!", likesCount: 40},
      {id: 3, message: "Its my first Post!", likesCount: 12}
   ],
   newPostText: ["let it begin"]

};


const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_POST:
         let newPost = {
            id: 4,
            message: state.newPostText,
            likesCount: 1
         };
         state.postsData.push(newPost);
         state.newPostText = '';
         return state;
      case UPDATE_NEW_POST_TEXT:
         state.newPostText = action.newText;
         return state;
      default:
         return state;

   }

}
export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => {
   return {
      type: UPDATE_NEW_POST_TEXT,
      newText: text
   }
}

export default profileReducer;
