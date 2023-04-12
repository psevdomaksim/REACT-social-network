import { ADD_MESSAGE, FETCH_DIALOGS, FETCH_ONE_DIALOG } from "../../UTILS";

let initialState = {
  dialogs: [],
  currentDialog: {},
  updatedDialog: {},
  dialogUser: {},
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
    default:
      return state;
  }
};

export default dialogsReducer;
