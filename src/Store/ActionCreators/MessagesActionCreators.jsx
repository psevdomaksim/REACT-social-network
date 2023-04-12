import {
  addMessage,
  fetchDialogs,
  fetchOneDialog,
} from "../../http/dialogsAPI";
import { fetchOneUser } from "../../http/usersAPI";
import { ADD_MESSAGE, FETCH_DIALOGS, FETCH_ONE_DIALOG } from "../../UTILS";
import { fetchOneUserActionCreator } from "./UsersActionCreators";

//fetch dialogs
export const fetchDialogsActionCreator = (data) => {
  return {
    type: FETCH_DIALOGS,
    data: data,
  };
};
export const fetchDialogsThunkCreator = () => {
  return (dispatch) => {
    fetchDialogs().then((data) => {
      dispatch(fetchDialogsActionCreator(data));
    });
  };
};

//fetch one dialog
export const fetchOneDialogActionCreator = (data) => {
  return {
    type: FETCH_ONE_DIALOG,
    data: data,
  };
};

export const fetchOneDialogThunkCreator = (id) => {
  return (dispatch) => {
    fetchOneDialog(id).then((dialog) => {
      dispatch(fetchOneDialogActionCreator(dialog));

      if (dialog.firstUserId !== 69) {
        fetchOneUser(dialog.firstUserId).then((user) => {
          dispatch(fetchOneUserActionCreator(user));
        });
      } else {
        fetchOneUser(dialog.secondUserId).then((user) => {
          dispatch(fetchOneUserActionCreator(user));
        });
      }
    });
  };
};

//add message
export const addMessageActionCreator = (data) => {
  return {
    type: ADD_MESSAGE,
    data: data,
  };
};

export const addMessageThunkCreator = (dialog, text) => {
  let newMessage = {
    id: Math.floor(Math.random() * 10000) + 1,
    fromUserId: 69,
    text: text,
  };

  dialog.messages.push(newMessage);
  let body = {
    id: dialog.id,
    firstUserId: dialog.firstUserId,
    secondUserId: dialog.secondUserId,
    messages: dialog.messages,
  };

  return (dispatch) => {
    addMessage(dialog.id, body).then((data) => {
      dispatch(addMessageActionCreator(data));
    });
  };
};
