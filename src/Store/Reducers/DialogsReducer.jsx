import { ADD_MESSAGE } from "../../UTILS";
import * as axios from "axios"

let initialState = {

        dialogs: [
          {
            id: 45,
            firstUserId: 1,
            secondUserId: 69,
            messages: [
              {
                id: 1,
                fromUserId: 1,
                text: "ku",
              },
              {
                id: 2,
                fromUserId: 1,
                text: "cho kak",
              },
              {
                id: 6,
                fromUserId: 69,
                text: "da norm ",
              },
              {
                id: 7,
                fromUserId: 69,
                text: "a ti? ",
              },
            ],
          },
          {
            id: 12,
            firstUserId: 2,
            secondUserId: 69,
            messages: [
              {
                id: 3,
                fromUserId: 2,
                text: "kak dela",
              },
              {
                id: 4,
                fromUserId: 2,
                text: "haha",
              },
              {
                id: 8,
                fromUserId: 69,
                text: "privet inspace ",
              },
            ],
          },
          {
            id: 87,
            firstUserId: 3,
            secondUserId: 69,
            messages: [
              {
                id: 5,
                toUserId: 69,
                fromUserId: 3,
                text: "cho novogo",
              },
            ],
          },
        ],       
}

const getRandomId = () => {
    let min = 1000;
    let max = 9999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };


const dialogsReducer = (state = initialState, action) => {

    switch(action.type) {
            case ADD_MESSAGE: {
                let newMessage = {
                    id: getRandomId(),
                    fromUserId: 69,
                    text: action.messageText,
                }

                let dialog = state.dialogs.find(dialog => dialog.id == action.dialogId);                       
                dialog.messages.push(newMessage)
                return state;
            }
        
        
        default: return state;
    }
}

export default dialogsReducer;