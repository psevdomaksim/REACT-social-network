import { ADD_POST } from "../../UTILS"

export const addPostActionCreator = (text) =>{
    
    return{
        type: ADD_POST,
        newPostText: text
    }
}