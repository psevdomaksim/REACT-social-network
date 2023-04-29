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
     
      if (dialog.firstUserId !== 69) {
        fetchOneUser(dialog.firstUserId).then((user) => {
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

//fetch dialog
export const goToDialogActionCreator = (data) => {
  return {
    type: GO_TO_DIALOG,
    data: data,
  };
};

export const goToDialogThunkCreator = (id) => {
  return (dispatch) => {

    fetchDialogs().then((dialogs) => {
      
      var curDialog = {};

      dialogs.filter((dialog) =>
        (dialog.firstUserId === 69 && dialog.secondUserId === +id) ||
        (dialog.secondUserId === 69 && dialog.firstUserId === +id) ? (
          curDialog = dialog
        ) : (
          <></>
        )
      )

  
       if(Object.keys(curDialog).length === 0)
        {

         let newDialog = {
           id: Math.floor(Math.random() * 10000) + 1,
           firstUserId: 69,
           secondUserId: +id,
           lastMessage: ""
         }

        dispatch(createDialogActionCreator(newDialog));
        dispatch(goToDialogActionCreator(newDialog));
      
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

export const createDialogThunkCreator = (id) => {
  let newDialog = {
    id: Math.floor(Math.random() * 10000) + 1,
    firstUserId: 69,
    secondUserId: id,
    lastMessage: ""
  };

  return (dispatch) => {
    createNewDialog(newDialog).then((data) => {
      dispatch(createDialogActionCreator(data));
    });
  };
};
