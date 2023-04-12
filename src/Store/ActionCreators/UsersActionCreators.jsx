import { FETCH_ONE_USER } from "../../UTILS";
import { FETCH_USERS } from "../../UTILS";
import { fetchOneUser, fetchUsers } from "../../http/usersAPI";

// fetch users
export const fetchUsersActionCreator = (data) => {
    return {
      type: FETCH_USERS,
      data: data
    };
    
}

export const fetchUsersThunkCreator = () => {
    return (dispatch) => {
      fetchUsers().then((data)=>{
        dispatch(fetchUsersActionCreator(data));
      })
    }
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





