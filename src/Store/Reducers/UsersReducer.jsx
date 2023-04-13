import { FETCH_ONE_USER } from "../../UTILS";
import { FETCH_USERS } from "../../UTILS";

let initialState = {
  users: [],
  currentUser: {}
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ONE_USER: {
      state = { ...state, currentUser: action.data};
      return state;
    }
  
    case FETCH_USERS: {
      state = { ...state, users: action.data };
      return state;
    }

    default:
      return state;
  }
};

export default usersReducer;
