import { ADD_POST } from "../../UTILS";

let initialState = {
  posts: [
    {
      id: 1,
      authorId: 1,
      profileId: 69,
      text: "рефлексирую",
    },

    {
      id: 2,
      authorId: 2,
      profileId: 69,
      text: "салют",
    },

    {
      id: 3,
      authorId: 3,
      profileId: 69,
      text: "брлблрблрблрблр",
    },
    {
      id: 4,
      authorId: 2,
      profileId: 1,
      text: "тестируем посты",
    },
    {
      id: 5,
      authorId: 1,
      profileId: 3,
      text: "Го фит",
    },
    {
      id: 5,
      authorId: 69,
      profileId: 2,
      text: "КОГДА АЛЬБОМ???",
    },
  ],
};

const getRandomId = () => {
  let min = 1000;
  let max = 9999;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: getRandomId(),
        authorId: 69,
        profileId: action.profileId,
        text: action.newPostText,
      };

      let stateCopy = { ...state };
      stateCopy.posts = [...state.posts];     
      stateCopy.posts.push(newPost);
      return stateCopy;
    }

    default:
      return state;
  }
};

export default postsReducer;
