import { combineReducers, createStore } from "redux";
import profileReducer from "./Reducers/ProfileReducer"
import state from "./State";

let Reducers = combineReducers({
  profilePage: profileReducer
});

let store = createStore(Reducers);

export default store;

// export let store = {

    
//     dispatch(action){
//       state.profilePage = postsReducer(state.profilePage, action);
//     }

// }