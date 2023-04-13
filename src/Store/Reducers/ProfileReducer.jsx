import { ADD_POST, FETCH_POSTS, DELETE_POST } from "../../UTILS";

let initialState = {
  posts: [],
  addedPost: {},
  deletedPost: {}
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS: {

      state = { ...state, posts: action.data };
      return state;
    }

    case ADD_POST: {
      state = { ...state, addedPost: action.data };
      return state;
    }

    case DELETE_POST: {
      state = { ...state, deletedPost: action.data };
      return state;
    }

    default:
      return state;
  }
};

export default postsReducer;
