import { CLEAN_ALL_USERS, FETCH_ONE_USER } from "../../UTILS";
import { FETCH_USERS, FETCH_CURRENT_LOGIN } from "../../UTILS";

let initialState = {
  users: [],
  allUsers: [],
  currentUser: {},
  currentLogin: {},
  limit: 8,
  page: 1,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ONE_USER: {
      state = { ...state, currentUser: action.data };

      if (state.currentUser.data.avatarImage === "") {
        state.currentUser.data.avatarImage = "default-image.jpg";
      }
      if (state.currentUser.data.ownerPageCover === "") {
        state.currentUser.data.ownerPageCover = "default-image.jpg";
      }
      return state;
    }
    case FETCH_CURRENT_LOGIN: {
      state = { ...state, currentLogin: action.data };
      if (state.currentLogin.data.avatarImage === "") {
        state.currentLogin.data.avatarImage = "default-image.jpg";
      }
      if (state.currentLogin.data.ownerPageCover === "") {
        state.currentLogin.data.ownerPageCover = "default-image.jpg";
      }
      return state;
    }

    case FETCH_USERS: {
      const resultPosts = [...state.allUsers, ...action.data];
      state = { ...state, allUsers: resultPosts, users: action.data };

      // state = { ...state, users: action.data };

      state.users.map(
        (user) => (
        state.allUsers.map(
          (user) => (
            user.data.avatarImage === "" ? (
              (user.data.avatarImage = "default-image.jpg")
            ) : (
              <></>
            ),
            user.data.ownerPageCover === "" ? (
              (user.data.ownerPageCover = "default-image.jpg")
            ) : (
              <></>
            )
          )
        )
        )
      );
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
