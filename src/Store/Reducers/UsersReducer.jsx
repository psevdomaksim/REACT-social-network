import { CLEAN_ALL_USERS, FETCH_ONE_USER } from "../../utils/AC_consts";
import { FETCH_USERS, FETCH_CURRENT_LOGIN } from "../../utils/AC_consts";

let initialState = {
  users: [],
  allUsers: [],
  currentUser: undefined,
  limit: 6,
  page: 1,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ONE_USER: {
      state = { ...state, currentUser: action.data };
      return state;
    }

    case FETCH_USERS: {
      const resultPosts = [...state.allUsers, ...action.data];
      state = { ...state, allUsers: resultPosts, users: action.data };

      // state = { ...state, users: action.data };
      return state;
    }
    case CLEAN_ALL_USERS:{

      state = { ...state, allUsers:[]};
      return state
    }

    default:
      return state;
  }
};

export default usersReducer;
