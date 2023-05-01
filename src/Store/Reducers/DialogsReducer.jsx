import { ADD_MESSAGE, FETCH_DIALOGS, FETCH_ONE_DIALOG, CHANGE_DIALOG_LAST_MESSAGE, GO_TO_DIALOG, CREATE_NEW_DIALOG } from "../../utils/AC_consts";

let initialState = {
  dialogs: [],
  currentDialog: {},
  updatedDialog: undefined,
  lastMessage: undefined,
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DIALOGS: {

      state = { ...state, dialogs: action.data };
      return state;
    }

    case ADD_MESSAGE: {
      state = { ...state, updatedDialog: action.data };
      return state;
    }
    case FETCH_ONE_DIALOG: {
      state = { ...state, currentDialog: action.data };
      return state;
    }
    case CHANGE_DIALOG_LAST_MESSAGE:{
      state = { ...state, lastMessage: action.data };
      return state;
    }
    case GO_TO_DIALOG:{
      state = { ...state, currentDialog: action.data };
      return state;
    }
    case CREATE_NEW_DIALOG:{

      const dialogs = state.dialogs;
      dialogs.push(action.data)
      state = { ...state, dialogs: dialogs };
      console.log(dialogs)
      return state;
    }
    default:
      return state;
  }
};

export default dialogsReducer;
