import axios from "axios";
import { ADD_MESSAGE, FETCH_DIALOGS } from "../../UTILS"

export const fetchDialogsActionCreator = async() =>{
    
    const { data } = await axios.get("http://localhost:4200/dialogs");

    return {
      type: FETCH_DIALOGS,
      data: data
    };
}

export const addMessageActionCreator =  async(text, id) =>{

    return{
        type: ADD_MESSAGE,
        messageText: text,
        dialogId: id
    }
}



