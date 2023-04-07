





let state = {
  profilePage: {
    posts: [
      {
        id: 1,
        authorId: 1,
        text: "dssdfsdf",
      },

      {
        id: 2,
        authorId: 2,
        text: "f122fsd",
      },

      {
        id: 3,
        authorId: 3,
        text: "dsfsdf23",
      },
    ],
  },

  dialogsPage: {
    dialogs: [
      {
        id: 1,
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
        id: 2,
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
        id: 3,
        firstUserId: 3,
        firstUserId: 69,
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
  },

  users: [
    {
      id: 1,
      login: "aikosina",
      password: "12345",
      data: [
        {
          name: "aikko",
          avatarImage: require("../images/dialog_ava.jpg"),
          ownerPageCover: require("../images/dialog_ava.jpg"),
          DateOfBirth: "21/03/2000",
          City: "",
          Education: ""
        }
      ],
      
    },

    {
      id: 2,
      login: "inspacina",
      password: "12345",
      data: [
        {
          name: "INSPACE",
          avatarImage: require("../images/dialog_ava.jpg"),
          ownerPageCover: require("../images/dialog_ava.jpg"),
          DateOfBirth: "21/03/2000",
          City: "",
          Education: ""
        }
      ],
      
    },

    {
      id: 3,
      login: "katanacss",
      password: "12345",
      data: [
        {
          name: "katanacss",
          avatarImage: require("../images/dialog_ava.jpg"),
          ownerPageCover: require("../images/dialog_ava.jpg"),
          DateOfBirth: "21/03/2000",
          City: "",
          Education: ""
        }
      ],
      
    },
    {
      id: 69,
      login: "maksosina",
      password: "12345",
      data: [
        {
          name: "maksos",
          avatarImage: require("../images/dialog_ava.jpg"),
          ownerPageCover: require("../images/dialog_ava.jpg"),
          DateOfBirth: "21/03/2000",
          City: "Minsk",
          Education: "ИНСТИТУТ ПИВА"
        }
      ],
      
    },
  ],
};

export default state;
