import axios from "axios";
import { ADD_MESSAGE, FETCH_DIALOGS } from "../../UTILS";


let initialState = {
  dialogs: [
  ],
};

const getRandomId = () => {
  let min = 1000;
  let max = 9999;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {

    case FETCH_DIALOGS: {
      state = {...state, dialogs: action.data }
      return state;
    }

    case ADD_MESSAGE: {

      let newMessage = {
        id: getRandomId(),
        fromUserId: 69,
        text: action.messageText,
      };

      let dialog = state.dialogs.find((dialog) => dialog.id == action.dialogId);

      const addMessage = async ()=>{
      

        dialog.messages.push(newMessage)
        const config = {
          method: 'put',
          url: `http://localhost:4200/dialogs/${action.dialogId}`,
          data: {
            "id": dialog.id,
            "firstUserId": dialog.firstUserId,
            "secondUserId": dialog.secondUserId,
            "messages": dialog.messages                        
          }
        }
      await axios(config)
      state = {...state, dialogs: config.data }
      return state
             
      }

      addMessage()
    

    }

    default:
      return state;
  }
};

export default dialogsReducer;
