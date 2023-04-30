import { ADD_MESSAGE, FETCH_DIALOGS, FETCH_MESSAGES, FETCH_ONE_DIALOG } from "../../utils/AC_consts";

let initialState = {
  messages: [],
  addedMessage: undefined
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MESSAGES: {
      state = { ...state, messages: action.data };
      return state;
    }

    case ADD_MESSAGE: {
      state = { ...state, addedMessage: action.data };
      return state;
    }

    default:
      return state;
  }
};

export default dialogsReducer;
