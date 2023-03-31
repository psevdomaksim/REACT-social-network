import { ADD_POST } from "../../UTILS"

export const addPostActionCreator = (text, id) =>{
    
    return{
        type: ADD_POST,
        newPostText: text,
        profileId: id
    }
}