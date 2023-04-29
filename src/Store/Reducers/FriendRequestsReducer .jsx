import { ACCEPT_FRIEND_REQUEST, DELETE_FRIEND_REQUEST, FETCH_FRIEND_REQUESTS, FETCH_ONE_REQUEST, REJECT_FRIEND_REQUEST, SEND_FRIEND_REQUEST } from "../../utils/AC_consts";


let initialState = {
  friendRequests: [],
  oneFriendReq: {}
};

const friendRequestsReducer = (state = initialState, action) => {
  switch (action.type) {

    case SEND_FRIEND_REQUEST: {
      const friendRequests = state.friendRequests;
      friendRequests.push(action.data)
      state = { ...state, friendRequests: friendRequests, oneFriendReq: action.data };
      return state;
    }
    case FETCH_FRIEND_REQUESTS:{
      state = { ...state, friendRequests: action.data };
      return state;
    }

    case FETCH_ONE_REQUEST:{
      state = { ...state, oneFriendReq: action.data[0]};
      return state;
    }
  

    case REJECT_FRIEND_REQUEST:{
      const friendRequests = state.friendRequests.filter((friendRequest) => friendRequest.id !== action.id);
      state = { ...state, friendRequests: friendRequests, oneFriendReq: undefined };
      return state;
    }

    case DELETE_FRIEND_REQUEST:{
      const friendRequests = state.friendRequests.filter((friendRequest) => friendRequest.id !== action.id);
      state = { ...state, friendRequests: friendRequests, oneFriendReq: undefined };
      return state;
    }

    default:
       return state;
    
  }
};

export default friendRequestsReducer;
