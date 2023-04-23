import { ACCEPT_FRIEND_REQUEST, DELETE_FRIEND, DELETE_FRIEND_REQUEST, FETCH_FRIENDS, FETCH_FRIEND_REQUESTS, FETCH_ONE_FRIEND } from "../../UTILS";


let initialState = {
  friends: [],
  friendRequests: [],
  oneFriend: {}
};

const friendsReducer = (state = initialState, action) => {
  switch (action.type) {


    case FETCH_FRIENDS: {
      state = { ...state, friends: action.data };
      return state;
    }

    case FETCH_ONE_FRIEND:{
      state = { ...state, oneFriend: action.data };
      return state;
    }

    case DELETE_FRIEND:{
      const friends = state.friends.filter((friend) => friend.id !== action.id);
      state = { ...state, friends: friends };
      return state;
    }

    case FETCH_FRIEND_REQUESTS:{
      state = { ...state, friendRequests: action.data };
      return state;
    }
    case ACCEPT_FRIEND_REQUEST:{
      const friends = state.friends;
      friends.push(action.data)
      state = { ...state, friends: friends };
      return state;
    }
    case DELETE_FRIEND_REQUEST:{
      const friendRequests = state.friendRequests.filter((friendRequest) => friendRequest.id !== action.id);
      state = { ...state, friendRequests: friendRequests };
      return state;
    }

    default:
      return state;
  }
};

export default friendsReducer;
