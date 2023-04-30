import { FETCH_CURRENT_LOGIN, API_ERROR, LOGIN, SET_LOGIN, LOG_OUT } from "../../utils/AC_consts";

let initialState = {
  currentLogin: null,
  isAuth: false,
  isLoading: true,
  token: null,
  error: null
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

    case LOGIN:{
      localStorage.setItem("token", action.token);
      state = { ...state, currentLogin: action.user, token: action.token, isAuth: true};
      return state;
    }

    case LOG_OUT:{
      localStorage.removeItem('token')
      state = { ...state, currentLogin: {}, token: null, isAuth: false};
      return state;
    }

    case SET_LOGIN:{
    
      state = { ...state, currentLogin: action.user, isAuth: true, isLoading: false};
     
      return state;
    }
  
    case API_ERROR:{
      state = { ...state, error: action.data };
      alert(state.error)
      return state;
    }


    default:
      return state;
  }
};

export default usersReducer;
