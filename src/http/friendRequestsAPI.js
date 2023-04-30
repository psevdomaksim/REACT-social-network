import { $host, $authHost } from "./http";

export const fetchFriendRequests = async (userId) => {
  const { data } = await $host.get(`/users/${userId}/friendRequests`);
  return data;
};

export const fetchOneFriendRequest = async (userId, requestSenderId) => {
  const { data } = await $host.get(`/friendRequests/`,{
    params:{
      userId: userId,
      requestSenderId: requestSenderId
    }
  });
  return data;
};

export const sendFriendRequest = async (newFriendRequest) => {
  const { data } = await $authHost({
    method: "POST",
    url: `/friendRequests`,
    data: newFriendRequest,
  });
  return data;
};


export const deleteFriendRequest = async (id) => {
 
  const { data } = await $authHost.delete(`/friendRequests/${id}`);

  return data;
};
