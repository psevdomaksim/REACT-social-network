import { CLEAN_ALL_USERS, FETCH_ONE_USER } from "../../UTILS";
import { FETCH_USERS, FETCH_CURRENT_LOGIN } from "../../UTILS";
import { fetchOneUser, fetchUsers } from "../../http/usersAPI";

// fetch users
export const fetchUsersActionCreator = (data) => {
    return {
      type: FETCH_USERS,
      data: data
    };   
}

export const fetchUsersThunkCreator = (limit, page) => {
    return (dispatch) => {
      fetchUsers(limit, page).then((data)=>{
        dispatch(fetchUsersActionCreator(data));
      })
    }
}

//clean all users
export const cleanAllUsersActionCreator = () => {
  return {
    type: CLEAN_ALL_USERS,
  };   
}


//fetch one user
export const fetchOneUserActionCreator = (data) => {

  return {
    type: FETCH_ONE_USER,
    data: data
  };
};

export const fetchOneUserThunkCreator = (id) => {
  return (dispatch) => {
    fetchOneUser(id).then((data)=>{
      dispatch(fetchOneUserActionCreator(data));
    })
  }
}

//fetch current login
export const fetchCurrentLoginActionCreator = (data) => {

  return {
    type: FETCH_CURRENT_LOGIN,
    data: data
  };
};

export const fetchCurrentLoginThunkCreator = () => {
  return (dispatch) => {
    fetchOneUser(69).then((data)=>{
      dispatch(fetchCurrentLoginActionCreator(data));
    })
  }
}






