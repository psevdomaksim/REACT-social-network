import { $host } from "./http";

export const fetchUsers = async () => {
  const { data } = await $host.get("/users");
  return data;
};

export const fetchOneUser = async (id) => {
  const { data } = await $host.get("/users/" + id);
  return data;
};

