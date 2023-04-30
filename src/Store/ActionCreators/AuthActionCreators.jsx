import { FETCH_CURRENT_LOGIN, LOGIN, API_ERROR, SET_LOGIN, LOG_OUT } from "../../utils/AC_consts";
import { fetchOneUser, fetchOneUserByLogin } from "../../http/usersAPI";
import bcrypt from "bcryptjs-react";
import { checkAuth, generateJWT, hashPassword } from "../../http/authAPI";

//fetch current login
export const fetchCurrentLoginActionCreator = (data) => {
  return {
    type: FETCH_CURRENT_LOGIN,
    data: data,
  };
};

export const fetchCurrentLoginThunkCreator = (id) => {
  return (dispatch) => {
    fetchOneUser(id).then((data) => {
      dispatch(fetchCurrentLoginActionCreator(data));
    });
  };
};

//no found error
export const ApiError = (data) => {
  return {
    type: API_ERROR,
    data: data,
  };
};

// login

export const loginActionCreator = (user, token) => {
  return {
    type: LOGIN,
    user: user,
    token: token
  };
};

export const loginThunkCreator = (username, password, role) => {
  return (dispatch) => {
    fetchOneUserByLogin(username).then((user) => {
      if (user.length == 0) {
        return dispatch(ApiError("Wrong login"));
      }

      let comparePassword = bcrypt.compareSync(password, user[0].password);
      if (!comparePassword) {
        return dispatch(ApiError("Wrong password"));
      }

      generateJWT(user[0].id, username, role).then((token) => {
        dispatch(loginActionCreator(user[0], token));
      });

      // hashPassword(password).then((data)=>{
      //  console.log(data)
      // })
    });
  };
};


// set login

export const logoutActionCreator = () => {
  return {
    type: LOG_OUT
  };
};


// set login

export const setLoginActionCreator = (user) => {
  return {
    type: SET_LOGIN,
    user: user
  };
};

export const setLoginThunkCreator = () => {
  
  return (dispatch) => {

    if(localStorage.getItem('token')) {

      checkAuth().then((payload) => {
          fetchOneUser(payload.id).then((user)=>{
            dispatch(setLoginActionCreator(user))
          })
      })
    }
  };
};
