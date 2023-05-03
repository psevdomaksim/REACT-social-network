import { $host, $authHost} from "./http";


export const fetchUsers = async (limit, page) => {
  const { data } = await $host.get("/users", {
    params:{
      _limit: limit,
      _page: page,
    }
 }
);
  return data;
};

export const fetchOneUser = async (id) => {
  const { data } = await $host.get("/users/" + id);
  return data;
};


export const fetchOneUserByLogin = async (login) => {
  const { data } = await $host.get(`/users?login=${login}`);
  return data;
};

export const updateUser = async (userId, updatedUser) => {
  const { data } = await $authHost({
    method: "PUT",
    url: `/users/${userId}`,
    data: updatedUser,
  });
  return data;
};


