import { combineReducers, createStore, applyMiddleware } from "redux";
import dialogsReducer from "./Reducers/DialogsReducer";
import profileReducer from "./Reducers/ProfileReducer"
import usersReducer from "./Reducers/UsersReducer";
import messagesReducer from "./Reducers/MessagesReducer";
import authReducer from "./Reducers/AuthReducer";
import thunk from 'redux-thunk';
import friendsReducer from "./Reducers/FriendsReducer";
import friendRequestsReducer from "./Reducers/FriendRequestsReducer ";

const Reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  messagesPage: messagesReducer,
  friendsPage: friendsReducer,
  friendReqsPage: friendRequestsReducer,
  auth: authReducer
});

const store = createStore(Reducers, applyMiddleware(thunk));

export default store;
