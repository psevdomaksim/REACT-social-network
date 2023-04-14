import { combineReducers, createStore, applyMiddleware } from "redux";
import dialogsReducer from "./Reducers/DialogsReducer";
import profileReducer from "./Reducers/ProfileReducer"
import usersReducer from "./Reducers/UsersReducer";
import messagesReducer from "./Reducers/MessagesReducer";
import thunk from 'redux-thunk';

const Reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  messagesPage: messagesReducer
});

const store = createStore(Reducers, applyMiddleware(thunk));

export default store;
