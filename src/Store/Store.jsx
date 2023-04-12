import { combineReducers, createStore, applyMiddleware } from "redux";
import dialogsReducer from "./Reducers/DialogsReducer";
import profileReducer from "./Reducers/ProfileReducer"
import usersReducer from "./Reducers/UsersReducer";
import thunk from 'redux-thunk';

const Reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer
});

const store = createStore(Reducers, applyMiddleware(thunk));

export default store;
