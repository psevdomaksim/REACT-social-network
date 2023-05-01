import { FETCH_CURRENT_LOGIN, LOGIN, API_ERROR, SET_LOGIN, LOG_OUT, SET_LOADING } from "../../utils/AC_consts";
import { fetchOneUser, fetchOneUserByLogin } from "../../http/usersAPI";
import bcrypt from "bcryptjs-react";
import { checkAuth, createUser, generateJWT, hashPassword } from "../../http/authAPI";

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

    });
  };
};

export const registrationThunkCreator = (login, name, password, role) => {
  return (dispatch) => {

    fetchOneUserByLogin(login).then((user) => {
      if (user.length !== 0) {
        return dispatch(ApiError("This login is already taken."));
      }

      if (name.length<3){
        return dispatch(ApiError("Name is too short"));
      }

      if (password.length<5){
        return dispatch(ApiError("Password is too short"));
      }

          let newUser = {
            id: Math.floor(Math.random() * 10000) + 1,
            login: login,
            password: bcrypt.hashSync(password, 6),
            data: {
              name: name,
              status: "",
              avatarImage: "default-image.jpg",
              ownerPageCover: "default-image.jpg",
              dateOfBirth: "",
              city: "",
              education: ""
            }
      }

      createUser(newUser).then((user) => {
        generateJWT(user.id, user.login, role).then((token) => {
          dispatch(loginActionCreator(user, token));
        }).catch(e=>alert(e));
      });

    });

  
 
  };
};



// log out

export const logoutActionCreator = () => {
  return {
    type: LOG_OUT
  };
};

//
// set login

export const setLoadingActionCreator = () => {
  return {
    type: SET_LOADING
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
    }else{
      dispatch(setLoadingActionCreator())
    }
  };
};
