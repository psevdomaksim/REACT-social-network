import { $host } from "./http";

export const fetchFriends = async (userId) => {
  const { data } = await $host.get(`/users/${userId}/friends`);
  return data;
};

export const fetchOneFriend = async (userId, friendId) => {
  const { data } = await $host.get(`/friends?userId=${userId}&&secondUserId=${friendId}`);
  return data;
};

export const addFriend = async (userId, newFriend) => {
  const { data } = await $host({
    method: "POST",
    url: `/users/${userId}/friends`,
    data: newFriend,
  });
  return data;
};

export const deleteFriend = async (id) => {
 
  const { data } = await $host.delete(`/friends/${id}`);

  return data;
};
