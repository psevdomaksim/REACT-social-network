import {
  createNewDialog,
  updateDialogLastMessage,
} from "../../http/dialogsAPI";
import { addMessage, fetchMessages } from "../../http/messagesAPI";

import { ADD_MESSAGE, FETCH_MESSAGES } from "../../utils/AC_consts";
import {
  changeDialogLastMessageActionCreator,
  createDialogActionCreator,
} from "./DialogsActionCreators";

//fetch messages
export const fetchMessagesActionCreator = (data) => {
  return {
    type: FETCH_MESSAGES,
    data: data,
  };
};
export const fetchMessagesThunkCreator = (dialogId) => {
  return (dispatch) => {
    fetchMessages(dialogId).then((data) => {
      dispatch(fetchMessagesActionCreator(data));
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
    dialogId: dialog.id,
    fromUserId: 69,
    text: text,
  };

  let newDialog = {
    id: dialog.id,
    firstUserId: dialog.firstUserId,
    secondUserId: dialog.secondUserId,
    lastMessage: text,
  };


  return (dispatch) => {
    addMessage(dialog.id, newMessage).then((data) => {
      dispatch(addMessageActionCreator(data));

      updateDialogLastMessage(dialog.id, newDialog)
        .then((data) => {
          dispatch(changeDialogLastMessageActionCreator(data));
        })
        .catch((e) => {
          if (dialog.lastMessage === "") {              //если диалога не существует в базе данных, то отправляется запрос на сервак о его добавлении, иначе же просто выводится на экран ошибка
            createNewDialog(newDialog).then((data) => {
              dispatch(createDialogActionCreator(data));
            });
          } else {
            console.log(e);
          }
        });

      fetchMessages(dialog.id).then((data) => {
        dispatch(fetchMessagesActionCreator(data));
      });
    });
  };
};
