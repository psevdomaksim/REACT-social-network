import { ADD_MESSAGE, FETCH_DIALOGS, FETCH_ONE_DIALOG, CHANGE_DIALOG_LAST_MESSAGE } from "../../UTILS";

let initialState = {
  dialogs: [],
  currentDialog: {},
  updatedDialog: {},
  lastMessage:{},
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
    default:
      return state;
  }
};

export default dialogsReducer;
