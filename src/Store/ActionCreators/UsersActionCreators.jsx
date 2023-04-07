import { FETCH_ONE_USER } from "../../UTILS";
import { FETCH_USERS } from "../../UTILS";

import axios from "axios";

export const fetchOneUserActionCreator = (id) => {
  return {
    type: FETCH_ONE_USER,
    userId: id,
  };
};

export const fetchUsersActionCreator = async () => {
  const { data } = await axios.get("http://localhost:4200/users");

  return {
    type: FETCH_USERS,
    data: data
  };
};
