const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
let initialState = {
   postsData: [
      {id: 1, message: "Hi! How are you?", likesCount: 7},
      {id: 2, message: "Hi! Nice to see u again!", likesCount: 40},
      {id: 3, message: "Its my first Post!", likesCount: 12}
   ],
   newPostText: ["Anything new?"]

};


const profileReducer = (state = initialState, action) => {
   let uniqueId = Math.random() * (10 - 1) + 1;
   let uniqueLikesCount =  Math.floor(Math.random() * (500 - 1) + 1);
   switch (action.type) {
      case ADD_POST:
      return {
      ...state,
         postsData:
         [...state.postsData,{
            id: uniqueId,
            message: state.newPostText,
            likesCount: uniqueLikesCount
         } ],
         newPostText: '',
      }

      case UPDATE_NEW_POST_TEXT:
         return {
            ...state,
            newPostText: action.newText
         }
         //stateCopy.newPostText = action.newText;


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
