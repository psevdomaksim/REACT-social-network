

let initialState = {
    users: [
        {
          id: 1,
          name: "aikko",
          avatarImage: require("../../images/dialog_ava.jpg"),
        },
    
        {
          id: 2,
          name: "INSPACE",
          avatarImage: require("../../images/dialog_ava.jpg"),
        },
    
        {
          id: 3,
          name: "katanacss",
          avatarImage: require("../../images/dialog_ava.jpg"),
        },
    
        {
          id: 69,
          name: "maksos",
          avatarImage: require("../../images/dialog_ava.jpg"),
        },
      ],
}


const usersReducer = (state = initialState, action) => {

    switch(action.type) {

    
      
        
        default: return state;
    }
}

export default usersReducer;