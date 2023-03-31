import { FETCH_ONE_USER } from "../../UTILS"

export const fetchOneUserActionCreator = (id) =>{
    
    return{
        type: FETCH_ONE_USER,
        dialogId: id
    }
}

