import { deleteFriendRequest } from "../../http/friendRequestsAPI";
import {
  addFriend,
  deleteFriend,
  fetchFriends,
  fetchOneFriend,
} from "../../http/friendsAPI";
import {
  ADD_FRIEND,
  DELETE_FRIEND,
  FETCH_FRIENDS,
  FETCH_ONE_FRIEND,
} from "../../UTILS";
import { deleteFriendRequestActionCreator } from "./FriendReqsActionCreators";

// fetch friends
export const fetchFriendsActionCreator = (data) => {
  return {
    type: FETCH_FRIENDS,
    data: data,
  };
};

export const fetchFriendsThunkCreator = (userId) => {
  return (dispatch) => {
    fetchFriends(userId).then((data) => {
      dispatch(fetchFriendsActionCreator(data));
    });
  };
};


// add friend
export const addFriendActionCreator = (data) => {
  return {
    type: ADD_FRIEND,
    data: data,
  };
};

export const addFriendThunkCreator = (friendRequest) => {
  let newFriend1 = {
    id: Math.floor(Math.random() * 10000) + 1,
    userId: friendRequest.userId,
    secondUserId: friendRequest.requestSenderId,
  };

  let newFriend2 = {
    id: Math.floor(Math.random() * 10000) + 1,
    userId: friendRequest.requestSenderId,
    secondUserId: friendRequest.userId,
  };

  return (dispatch) => {
    addFriend(newFriend1).then((data) => {
   
      dispatch(addFriendActionCreator(data));
    });
    addFriend(newFriend2).then((data) => {
      dispatch(addFriendActionCreator(data));
    });
    deleteFriendRequest(friendRequest.id).then(() => {
      dispatch(deleteFriendRequestActionCreator(friendRequest.id));
    });
  };
};

// delete friend
export const deleteFriendActionCreator = (id) => {
  return {
    type: DELETE_FRIEND,
    id: id,
  };
};

export const deleteFriendThunkCreator = (userId, friendId) => {
  return (dispatch) => {
    fetchOneFriend(userId, +friendId).then((data) => {
      deleteFriend(data[0].id).then((data) => {        
      });
      dispatch(deleteFriendActionCreator(data[0].id));
    });

    fetchOneFriend(+friendId, userId).then((data) => {
      deleteFriend(data[0].id).then((data) => {
      });
      dispatch(deleteFriendActionCreator(data[0].id));
    });
  };
};

//fetch one friend
export const fetchOneFriendActionCreator = (data) => {
  return {
    type: FETCH_ONE_FRIEND,
    data: data,
  };
};

export const fetchOneUserThunkCreator = (userId, friendId) => {
  return (dispatch) => {
    fetchOneFriend(userId, friendId).then((data) => {
      dispatch(fetchOneFriendActionCreator(data));
    });
  };
};

