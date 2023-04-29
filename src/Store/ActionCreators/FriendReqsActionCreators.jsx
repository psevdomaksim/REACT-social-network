import {
  acceptFriendRequest,
  deleteFriendRequest,
  fetchFriendRequests,
  fetchOneFriendRequest,
  sendFriendRequest,
} from "../../http/friendRequestsAPI";
import {
  ACCEPT_FRIEND_REQUEST,
  DELETE_FRIEND_REQUEST,
  FETCH_FRIEND_REQUESTS,
  FETCH_ONE_REQUEST,
  REJECT_FRIEND_REQUEST,
  SEND_FRIEND_REQUEST,
} from "../../utils/AC_consts";


// fetch friends requests
export const fetchFriendRequestsActionCreator = (data) => {
  return {
    type: FETCH_FRIEND_REQUESTS,
    data: data,
  };
};

export const fetchFriendRequestsThunkCreator = (userId) => {
  return (dispatch) => {
    fetchFriendRequests(userId).then((data) => {
      dispatch(fetchFriendRequestsActionCreator(data));
    });
  };
};

// fetch one request
export const fetchOneFriendReqActionCreator = (data) => {
  return {
    type: FETCH_ONE_REQUEST,
    data: data,
  };
};

export const fetchOneFriendReqThunkCreator = (userId, requestSenderId) => {
  return (dispatch) => {
    fetchOneFriendRequest(userId, requestSenderId).then((data) => {
      dispatch(fetchOneFriendReqActionCreator(data));
    });
  };
};

//send friend request

export const sendFriendRequestsActionCreator = (data) => {
  
  return {
    type: SEND_FRIEND_REQUEST,
    data: data,
  };
};

export const sendFriendRequestsThunkCreator = (userId, requestSenderId) => {

  let newFriendRequest = {
    id: Math.floor(Math.random() * 10000) + 1,
    userId: userId,
    requestSenderId: requestSenderId,
  };


  return (dispatch) => {
    sendFriendRequest(newFriendRequest).then((data) => {
      dispatch(sendFriendRequestsActionCreator(data));
    });
  };
};


// delete friend request

export const deleteFriendRequestActionCreator = (id) => {
  return {
    type: DELETE_FRIEND_REQUEST,
    id: id,
  };
};

export const deleteFriendRequestThunkCreator = (friendRequest) => {
  return (dispatch) => {
    deleteFriendRequest(friendRequest.id).then(() => {
      dispatch(deleteFriendRequestActionCreator(friendRequest.id));
    });
  };
};




// reject friend request


export const rejectFriendRequestActionCreator = (id) => {
  return {
    type: REJECT_FRIEND_REQUEST,
    id: id,
  };
};

export const rejectFriendRequestThunkCreator = (friendRequest) => {
  return (dispatch) => {
    deleteFriendRequest(friendRequest.id).then(() => {
      dispatch(rejectFriendRequestActionCreator(friendRequest.id));
    });
  };
};
