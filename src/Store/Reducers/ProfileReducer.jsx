import { ADD_POST, FETCH_POSTS, DELETE_POST, CHANGE_PAGE, CHANGE_PROFILE } from "../../utils/AC_consts";

let initialState = {
  posts: [],
  addedPost: {},
  deletedPost: {},
  limit: 3,
  page: 1
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS: {
      const resultPosts = [...state.posts, ...action.data];
      state = { ...state, posts: resultPosts };
      return state;
    }

    case ADD_POST: {
      const posts = state.posts;
      posts.push(action.data)
      state = { ...state, posts: posts };
      return state;
    }

    case DELETE_POST: {
      const posts = state.posts.filter((post) => post.id !== action.id);
      state = { ...state, posts: posts };
      return state;
    }

    case CHANGE_PAGE:{     
      state = { ...state, page: action.page };
      return state;
    }

    case CHANGE_PROFILE:{
      
      state = { ...state, posts: action.data, page: 1};
      return state;
    }


    default:
      return state;
  }
};

export default postsReducer;
