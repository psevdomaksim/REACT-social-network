import { acceptFriendRequest, deleteFriendRequest, fetchFriendRequests } from "../../http/friendRequestsAPI";
import { deleteFriend, fetchFriends, fetchOneFriend } from "../../http/friendsAPI";
import { ACCEPT_FRIEND_REQUEST, DELETE_FRIEND, FETCH_FRIENDS, FETCH_FRIEND_REQUESTS, FETCH_ONE_FRIEND, FETCH_ONE_USER } from "../../UTILS";


// fetch users
export const fetchFriendsActionCreator = (data) => {
    return {
      type: FETCH_FRIENDS,
      data: data
    };   
}

export const fetchFriendsThunkCreator = (userId) => {
    return (dispatch) => {
      fetchFriends(userId).then((data)=>{
        dispatch(fetchFriendsActionCreator(data));
      })
    }
}

// delete friend
export const deleteFriendActionCreator = (id) => {
  return {
    type: DELETE_FRIEND,
    id: id
  };   
}

export const deleteFriendThunkCreator = (userId, friendId) => {
  return (dispatch) => {
    fetchOneFriend(userId, friendId).then((data)=>{
      deleteFriend(data[0].id).then((data)=>{

      })
      dispatch(deleteFriendActionCreator(data[0].id));
    })


    fetchOneFriend(friendId, userId).then((data)=>{
     deleteFriend(data[0].id).then((data)=>{
    
      })
      dispatch(deleteFriendActionCreator(data[0].id));
    })

     
  }
}


 //fetch one friend
 export const fetchOneFriendActionCreator = (data) => {

   return {
     type: FETCH_ONE_FRIEND,
     data: data
   };
};

 export const fetchOneUserThunkCreator = (userId, friendId) => {
   return (dispatch) => {
     fetchOneFriend(userId, friendId).then((data)=>{
       dispatch(fetchOneFriendActionCreator(data));
     })
   }
 }


////////////////////////////////////////////////////////////////////////////////////

 // fetch friends requests
export const fetchFriendRequestsActionCreator = (data) => {
  return {
    type: FETCH_FRIEND_REQUESTS,
    data: data
  };   
}

export const fetchFriendRequestsThunkCreator = (userId) => {
  return (dispatch) => {
    fetchFriendRequests(userId).then((data)=>{
      dispatch(fetchFriendRequestsActionCreator(data));
    })
  }
}

 // accept friend request
 export const acceptFriendRequestActionCreator = (data) => {
  return {
    type: ACCEPT_FRIEND_REQUEST,
    data: data
  };   
}

export const acceptFriendRequestThunkCreator = (userId, requestSenderId) => {

  let newFriend1 ={
    id: Math.floor(Math.random() * 10000) + 1,
    userId: userId,
    requestSenderId: requestSenderId
  }

  let newFriend2 ={
    id: Math.floor(Math.random() * 10000) + 1,
    userId: requestSenderId,
    requestSenderId: userId
  }

  return (dispatch) => {
    acceptFriendRequest(newFriend1).then((data)=>{
      dispatch(acceptFriendRequestActionCreator(data));
    })
    acceptFriendRequest(newFriend2).then((data)=>{
      dispatch(acceptFriendRequestActionCreator(data));
    })
  
  }
}






