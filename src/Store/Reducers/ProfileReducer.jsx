import { ADD_POST } from "../../UTILS";

let initialState = {
    posts: [
      {
        id: 1,
        authorId: 1,
        text: "dssdfsdf",
      },

      {
        id: 2,
        authorId: 2,
        text: "f122fsd",
      },

      {
        id: 3,
        authorId: 3,
        text: "dsfsdf23",
      },
    ],
}

const getRandomId = () => {
    let min = 1000;
    let max = 9999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };


const postsReducer = (state = initialState, action) => {

    switch(action.type) {

        case ADD_POST: 
         {
            let newPost = {
            id: getRandomId(),
            authorId: 69,
            text: action.newPostText
          }
          
          
          state.posts.push(newPost);
          return state;
        }
      
        
        default: return state;
    }
}

export default postsReducer;