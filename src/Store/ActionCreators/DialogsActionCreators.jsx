import {
  createNewDialog,
  fetchDialogs,
  fetchOneDialog,
  updateDialogLastMessage,
} from "../../http/dialogsAPI";
import { fetchMessages } from "../../http/messagesAPI";
import { fetchOneUser, fetchUsers } from "../../http/usersAPI";
import {
  FETCH_DIALOGS,
  FETCH_ONE_DIALOG,
  CHANGE_DIALOG_LAST_MESSAGE,
  GO_TO_DIALOG,
  CREATE_NEW_DIALOG,
} from "../../utils/AC_consts";
import {
  fetchMessagesActionCreator,
  fetchMessagesThunkCreator,
} from "./MessagesActionCreators";
import { fetchOneUserActionCreator } from "./UsersActionCreators";

//fetch dialogs
export const fetchDialogsActionCreator = (data) => {
  return {
    type: FETCH_DIALOGS,
    data: data,
  };
};
export const fetchDialogsThunkCreator = (login) => {
  return (dispatch) => {
    fetchDialogs(login.id).then((dialogs) => {
      fetchUsers().then((users) => {
        dialogs.map((dialog) =>
          users.map((user) =>
            login.id != user.id && dialog.userId === user.id ? (
              ((dialog.previewName = user.data.name),
              (dialog.previewAvatar = user.data.avatarImage))
            ) : login.id != user.id && dialog.secondUserId === user.id ? (
              ((dialog.previewName = user.data.name),
              (dialog.previewAvatar = user.data.avatarImage))
            ) : login.id == dialog.userId && login.id == dialog.secondUserId ? (
              ((dialog.previewName = login.data.name),
              (dialog.previewAvatar = login.data.avatarImage))
            ) : (
              <></>
            )
          )
        );
        dispatch(fetchDialogsActionCreator(dialogs));
      });
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

export const fetchOneDialogThunkCreator = (id, loginId) => {
  return (dispatch) => {
    fetchOneDialog(id)
      .then((dialog) => {
        dispatch(fetchOneDialogActionCreator(dialog));

        dispatch(fetchMessagesThunkCreator(id));

        if (dialog.userId !== loginId) {
          fetchOneUser(dialog.userId).then((user) => {
            dispatch(fetchOneUserActionCreator(user));
          });
        } else {
          fetchOneUser(dialog.secondUserId).then((user) => {
            dispatch(fetchOneUserActionCreator(user));
          });
        }
      })
      .catch(() => dispatch(fetchMessagesActionCreator([])));
  };
};

//go to dialog
export const goToDialogActionCreator = (data) => {
  return {
    type: GO_TO_DIALOG,
    data: data,
  };
};

export const goToDialogThunkCreator = (id, loginId, curDialog) => {
  return (dispatch) => {
    if (Object.keys(curDialog).length === 0) {
      let newDialog = {
        id: Math.floor(Math.random() * 10000) + 1,
        userId: loginId,
        secondUserId: +id,
        lastMessage: "",
      };

      //dispatch(createDialogActionCreator(newDialog));
      dispatch(goToDialogActionCreator(newDialog));
    } else {
      dispatch(goToDialogActionCreator(curDialog));
    }
  };
};

//create new dialog
export const createDialogActionCreator = (data) => {
  return {
    type: CREATE_NEW_DIALOG,
    data: data,
  };
};

export const createDialogThunkCreator = (id, loginId) => {
  let newDialog = {
    id: Math.floor(Math.random() * 10000) + 1,
    userId: loginId,
    secondUserId: id,
    lastMessage: "",
  };
  return (dispatch) => {
    createNewDialog(newDialog).then((data) => {
      dispatch(createDialogActionCreator(data));
    });
  };
};
