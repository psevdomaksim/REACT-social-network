import {
  createNewDialog,
  fetchDialogs,
  fetchOneDialog,
  updateDialogLastMessage,
} from "../../http/dialogsAPI";
import { fetchMessages } from "../../http/messagesAPI";
import { fetchOneUser } from "../../http/usersAPI";
import {
  FETCH_DIALOGS,
  FETCH_ONE_DIALOG,
  CHANGE_DIALOG_LAST_MESSAGE,
  GO_TO_DIALOG,
  CREATE_NEW_DIALOG,
} from "../../utils/AC_consts";
import { fetchMessagesActionCreator } from "./MessagesActionCreators";
import { fetchOneUserActionCreator } from "./UsersActionCreators";

//fetch dialogs
export const fetchDialogsActionCreator = (data) => {
  return {
    type: FETCH_DIALOGS,
    data: data,
  };
};
export const fetchDialogsThunkCreator = (loginId) => {
  return (dispatch) => {
    fetchDialogs(loginId).then((data) => {
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

export const fetchOneDialogThunkCreator = (id, loginId) => {
  return (dispatch) => {
    fetchOneDialog(id).then((dialog) => {
      dispatch(fetchOneDialogActionCreator(dialog));

        fetchMessages(id).then((data) => {
          dispatch(fetchMessagesActionCreator(data));
        }); 
     
      if (dialog.userId !== loginId) {
        fetchOneUser(dialog.userId).then((user) => {
          dispatch(fetchOneUserActionCreator(user));
        });
      } else {
        fetchOneUser(dialog.secondUserId).then((user) => {
          dispatch(fetchOneUserActionCreator(user));
        });
      }
    }).catch(()=>
      dispatch(fetchMessagesActionCreator([]))
    );
  };
};

//go to dialog
export const goToDialogActionCreator = (data) => {
  return {
    type: GO_TO_DIALOG,
    data: data,
  };
};

export const goToDialogThunkCreator = (id, loginId) => {
  return (dispatch) => {

    fetchDialogs(loginId).then((dialogs) => {
      
      var curDialog = {};

      dialogs.filter((dialog) =>
        (dialog.userId === loginId && dialog.secondUserId === +id) ||
        (dialog.secondUserId === loginId && dialog.userId === +id) ? (
          curDialog = dialog
        ) : (
          <></>
        )
      )

  
       if(Object.keys(curDialog).length === 0)
        {

         let newDialog1 = {
           id: Math.floor(Math.random() * 10000) + 1,
           userId: loginId,
           secondUserId: +id,
           lastMessage: ""
         }

         let newDialog2 = {
          id: Math.floor(Math.random() * 10000) + 1,
          userId: +id,
          secondUserId: loginId,
          lastMessage: ""
        }

        dispatch(createDialogActionCreator(newDialog1));
        dispatch(createDialogActionCreator(newDialog2));
        dispatch(goToDialogActionCreator(newDialog1));
      
      }else{
        dispatch(goToDialogActionCreator(curDialog));
      }

      
  
   
    
    
    })
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
  let newDialog1 = {
    id: Math.floor(Math.random() * 10000) + 1,
    userId: loginId,
    secondUserId: id,
    lastMessage: ""
  };

  let newDialog2 = {
    id: Math.floor(Math.random() * 10000) + 1,
    userId: id,
    secondUserId: loginId,
    lastMessage: ""
  };

  return (dispatch) => {
    createNewDialog(newDialog1).then((data) => {
      dispatch(createDialogActionCreator(data));
    });
    createNewDialog(newDialog2).then((data) => {
      dispatch(createDialogActionCreator(data));
    });
  };
};
