import { combineReducers, createStore } from "redux";
import dialogsReducer from "./Reducers/DialogsReducer";
import profileReducer from "./Reducers/ProfileReducer"
import usersReducer from "./Reducers/UsersReducer";


const Reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer
});

const store = createStore(Reducers);

export default store;

// export let store = {

    
//     dispatch(action){
//       state.profilePage = postsReducer(state.profilePage, action);
//     }

// }