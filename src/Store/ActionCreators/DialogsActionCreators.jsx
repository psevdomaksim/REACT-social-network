import {
  fetchDialogs,
  fetchOneDialog,
  updateDialogLastMessage,
} from "../../http/dialogsAPI";
import { fetchMessages } from "../../http/messagesAPI";
import { fetchOneUser } from "../../http/usersAPI";
import {  FETCH_DIALOGS, FETCH_ONE_DIALOG, CHANGE_DIALOG_LAST_MESSAGE } from "../../UTILS";
import { fetchMessagesActionCreator } from "./MessagesActionCreators";
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

//change dialog last message
export const changeDialogLastMessageActionCreator = (data) => {
  return {
    type: CHANGE_DIALOG_LAST_MESSAGE,
    data: data,
  };
};
export const changeDialogLastMessageThunkCreator = (id, dialog) => {
  return (dispatch) => {
    updateDialogLastMessage(id, dialog).then((data) => {
      dispatch(changeDialogLastMessageActionCreator(data));
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

      fetchMessages(id).then((data) => {
        dispatch(fetchMessagesActionCreator(data));
      });

      // if (dialog.firstUserId !== 69) {
      //   fetchOneUser(dialog.firstUserId).then((user) => {
      //     dispatch(fetchOneUserActionCreator(user));
      //   });
      // } else {
      //   fetchOneUser(dialog.secondUserId).then((user) => {
      //     dispatch(fetchOneUserActionCreator(user));
      //   });
      // }
    });
  };
};


