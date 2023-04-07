import { FETCH_ONE_USER } from "../../UTILS";
import { FETCH_USERS } from "../../UTILS";

// let initialState1 = {
//   users: [
//     {
//       id: 1,
//       login: "aikosina",
//       password: "12345",
//       data: {
//         name: "aikko",
//         status: "Опухоль чебурека",
//         avatarImage: require("../../images/aikko.jpg"),
//         ownerPageCover: require("../../images/dialog_ava.jpg"),
//         dateOfBirth: "25/09/1987",
//         City: "Minsk",
//         Education: "",
//       },
//       friends:[
//         2,3,69
//       ]
//     },

//     {
//       id: 2,
//       login: "inspacina",
//       password: "12345",
//       data: {
//         name: "INSPACE",
//         status: "Нечего терять",
//         avatarImage: require("../../images/inspace.jpg"),
//         ownerPageCover: require("../../images/dialog_ava.jpg"),
//         dateOfBirth: "04/12/1992",
//         city: "Minsk",
//         education: "",
//       },
//       friends:[
//         1,69,3
//       ]
//     },

//     {
//       id: 3,
//       login: "katanacss",
//       password: "12345",
//       data: {
//         name: "katanacss",
//         status: "пуф",
//         avatarImage: require("../../images/katanacss.jpg"),
//         ownerPageCover: require("../../images/dialog_ava.jpg"),
//         dateOfBirth: "21/03/1993",
//         city: "Minsk",
//         education: "",
//       },
//       friends:[
//         1,2,69
//       ]
//     },
//     {
//       id: 69,
//       login: "maksosina",
//       password: "12345",
//       data: {
//         name: "maksos",
//         status: "РЕАКТ РЕДАКС ТЫ ЗНАТЬ БУДЕШЬ КРУТО",
//         avatarImage: require("../../images/ava.jpg"),
//         ownerPageCover: require("../../images/main-image.png"),
//         dateOfBirth: "24/06/2004",
//         city: "Minsk",
//         education: "ИНСТИТУТ ПИВА",
//       },
//       friends:[
//         1,2,3
//       ]
//     },
//   ],
// };

let initialState = {
  users: [
  ]
};


// const Users = async () =>{
//   const testState = await axios.get("http://localhost:3000/users")
//  // st = testState.data
//   console.log(testState.data);
//   return st
// }
// Users();



 const usersReducer = (state = initialState, action) => {

  switch (action.type) {
    case FETCH_ONE_USER: {
      return {
        users: [
          state.users.find((user) => {
            if (user.id == action.userId) {
              console.log(user);
              return user;
            }
          }),
        ],
      };
    }

    case FETCH_USERS:{
      state = {...state, users: action.data }
        return state
    }

    default:
      return state;
  }
};

export default usersReducer;
