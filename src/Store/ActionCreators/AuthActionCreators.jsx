import { FETCH_CURRENT_LOGIN } from "../../utils/AC_consts";
import { fetchOneUser } from "../../http/usersAPI";



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






