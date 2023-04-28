import { ACCEPT_FRIEND_REQUEST, ADD_FRIEND, DELETE_FRIEND, DELETE_FRIEND_REQUEST, FETCH_FRIENDS, FETCH_FRIEND_REQUESTS, FETCH_ONE_FRIEND, FETCH_ONE_REQUEST, REJECT_FRIEND_REQUEST, SEND_FRIEND_REQUEST } from "../../UTILS";


let initialState = {
  friends: [],
  oneFriend: {},
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

    case ADD_FRIEND:{
        const friends = state.friends;
        friends.push(action.data)
        state = { ...state, friends: friends };
        return state;    
    }


    default:
       return state;
    
  }
};

export default friendsReducer;
