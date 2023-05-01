import { FETCH_CURRENT_LOGIN, API_ERROR, LOGIN, SET_LOGIN, LOG_OUT, SET_LOADING } from "../../utils/AC_consts";

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
     
      return state;
    }

    case LOGIN:{
      localStorage.setItem("token", action.token);  
      state = { ...state, currentLogin: action.user, token: action.token, isAuth: true};
      return state;
    }

    case LOG_OUT:{
      localStorage.removeItem('token')
   
      state = { ...state, currentLogin: null, token: null, isAuth: false};
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

    case SET_LOADING:{
      state = { ...state, isLoading: false };
    }

    default:
      return state;
  }
};

export default usersReducer;
