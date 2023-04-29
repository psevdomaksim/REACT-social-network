import { FETCH_CURRENT_LOGIN } from "../../utils/AC_consts";

let initialState = {
  currentLogin: {},
  isAuth: true
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {

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


    default:
      return state;
  }
};

export default usersReducer;
