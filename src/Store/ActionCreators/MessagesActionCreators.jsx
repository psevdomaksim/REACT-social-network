import {
  createNewDialog,
  updateDialogLastMessage,
} from "../../http/dialogsAPI";
import { addMessage, fetchMessages } from "../../http/messagesAPI";
import { fetchUsers } from "../../http/usersAPI";

import { ADD_MESSAGE, FETCH_MESSAGES } from "../../utils/AC_consts";
import {
  changeDialogLastMessageActionCreator,
  createDialogActionCreator,
  fetchDialogsThunkCreator,
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
    fetchMessages(dialogId).then((messages) => {
      fetchUsers().then((users) => {
        messages.map((message) =>
          users.map((user) =>
            message.fromUserId === user.id ? (
              message.fromUserName = user.data.name
            ) : (
              <></>
            )
          )
        );
        dispatch(fetchMessagesActionCreator(messages));
      });
    
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

export const addMessageThunkCreator = (dialog, text, loginId) => {
  let newMessage = {
    id: Math.floor(Math.random() * 10000) + 1,
    dialogId: dialog.id,
    fromUserId: loginId,
    text: text,
  };

  let newDialog = {
    id: dialog.id,
    userId: dialog.userId,
    secondUserId: dialog.secondUserId,
    lastMessage: text,
  };

  return (dispatch) => {
    addMessage(newMessage).then((data) => {
      //dispatch(addMessageActionCreator(data));

      updateDialogLastMessage(dialog.id, newDialog)
        .then((data) => {
          dispatch(changeDialogLastMessageActionCreator(data));
        })
        .catch((e) => {
          if (dialog.lastMessage === "") {
            //если диалога не существует в базе данных, то отправляется запрос на сервак о его добавлении, иначе же просто выводится на экран ошибка(404 по задумке должна быть)
            createNewDialog(newDialog).then((data) => {
              dispatch(createDialogActionCreator(data));
              dispatch(fetchDialogsThunkCreator(loginId))
            });
          } else {
            alert(e);
          }
        });

      dispatch(fetchMessagesThunkCreator(dialog.id))
      
    });
  };
};
