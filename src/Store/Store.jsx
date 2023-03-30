import { combineReducers, createStore } from "redux";
import dialogsReducer from "./Reducers/DialogsReducer";
import profileReducer from "./Reducers/ProfileReducer"
import usersReducer from "./Reducers/UsersReducer";
import state from "./State";

let Reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer
});

let store = createStore(Reducers);

export default store;

// export let store = {

    
//     dispatch(action){
//       state.profilePage = postsReducer(state.profilePage, action);
//     }

// }