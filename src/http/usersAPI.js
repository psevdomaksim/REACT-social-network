import { $host } from "./http";

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

