import { ADD_MESSAGE } from "../../UTILS"

export const addMessageActionCreator = (text, id) =>{
    return{
        type: ADD_MESSAGE,
        messageText: text,
        dialogId: id
    }
}

