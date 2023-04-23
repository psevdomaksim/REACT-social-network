import { $host } from "./http";

export const fetchFriendRequests = async (userId) => {
  const { data } = await $host.get(`/users/${userId}/friendRequests`);
  return data;
};

export const fetchOneFriendRequest = async (id) => {
  const { data } = await $host.get(`/friendRequests/${id}`);
  return data;
};

export const sendFriendRequest = async (newFriendRequest) => {
  const { data } = await $host({
    method: "POST",
    url: `/friendRequests`,
    data: newFriendRequest,
  });
  return data;
};


export const acceptFriendRequest = async (newFriend) => {
  const { data } = await $host({
    method: "POST",
    url: `/friendRequests`,
    data: newFriend,
  });
  return data;
};

export const deleteFriendRequest = async (id) => {
 
  const { data } = await $host.delete(`/friendRequests/${id}`);

  return data;
};
