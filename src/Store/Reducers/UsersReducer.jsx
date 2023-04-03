import { FETCH_ONE_USER } from "../../UTILS";

let initialState = {
  users: [
    {
      id: 1,
      login: "aikosina",
      password: "12345",
      data: {
        name: "aikko",
        status: "Опухоль чебурека",
        avatarImage: require("../../images/aikko.jpg"),
        ownerPageCover: require("../../images/dialog_ava.jpg"),
        dateOfBirth: "25/09/1987",
        City: "Minsk",
        Education: "",
      },
    },

    {
      id: 2,
      login: "inspacina",
      password: "12345",
      data: {
        name: "INSPACE",
        status: "Нечего терять",
        avatarImage: require("../../images/inspace.jpg"),
        ownerPageCover: require("../../images/dialog_ava.jpg"),
        dateOfBirth: "04/12/1992",
        city: "Minsk",
        education: "",
      },
    },

    {
      id: 3,
      login: "katanacss",
      password: "12345",
      data: {
        name: "katanacss",
        status: "пуф",
        avatarImage: require("../../images/katanacss.jpg"),
        ownerPageCover: require("../../images/dialog_ava.jpg"),
        dateOfBirth: "21/03/1993",
        city: "Minsk",
        education: "",
      },
    },
    {
      id: 69,
      login: "maksosina",
      password: "12345",
      data: {
        name: "maksos",
        status: "РЕАКТ РЕДАКС ТЫ ЗНАТЬ БУДЕШЬ КРУТО",
        avatarImage: require("../../images/ava.jpg"),
        ownerPageCover: require("../../images/main-image.png"),
        dateOfBirth: "24/06/2004",
        city: "Minsk",
        education: "ИНСТИТУТ ПИВА",
      },
    },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ONE_USER: {

      let user;

      console.log(state)

      // let dialog = state.dialogsPage.dialogs.find((dialog) => dialog.id == action.id);
      // state.usersPage.users.map((user) =>
      //   user.id == dialog.firstUserId ? (user = user) : <></>
      // );

      return state;
    }

    default:
      return state;
  }
};

export default usersReducer;
