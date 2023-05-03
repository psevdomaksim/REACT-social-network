import { CLEAN_ALL_USERS, FETCH_ONE_USER, FETCH_USERS} from "../../utils/AC_consts";
import { createImageFile, fetchOneUser, fetchUsers } from "../../http/usersAPI";


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









