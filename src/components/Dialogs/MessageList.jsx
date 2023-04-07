import "../css/Dialogs.css";

import Message from "./Message";
import { Image, Form, Button } from "react-bootstrap";
import { useParams } from "react-router";
import { useContext } from "react";
import { useState, useEffect } from "react";
import { StoreContext } from "../..";
import { addMessageActionCreator } from "../../Store/ActionCreators/MessagesActionCreators";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { fetchUsersActionCreator } from "../../Store/ActionCreators/UsersActionCreators";

const MessageList = () => {
  const { id } = useParams();

  const messageScroll = useRef(null);

  const store = useContext(StoreContext);

  let state = store.getState();

  const [users, setUsers] = useState();
  
  const fetchUsers = async () =>{
    fetchUsersActionCreator().then((data) => {
       store.dispatch(data);
       state = store.getState();
       setUsers(state.usersPage.users);
     });
}

 useEffect(() => {
   fetchUsers();
 }, []);


 useEffect(() => {
  fetchOneUserByDialog();
}, [users]);

const [currentUser, setCurrentUser] = useState();

  const fetchOneUserByDialog = async () => {
    if (users != undefined) {
      
    let dialog = state.dialogsPage.dialogs.find((dialog) => dialog.id == id);
    users.map((u) =>
      u.id == dialog.firstUserId ? (setCurrentUser(u)) : <></>
    );
  }
  };

  const [message, setMessage] = useState({
    text: "",
  });



  const clear = () => {
    setMessage({
      text: "",
    });
  };

  const onChange = (event) => {
    if (event.target.id === "text") {
      setMessage({
        ...message,
        text: event.target.value,
      });
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {  
        addMessage();    
    }
    
  };

  const addMessage = () => {
    if (message.text !== "") {
      store.dispatch(addMessageActionCreator(message.text, id));
      clear();
    } else {
       return;
    }
  };

  return currentUser!==undefined ? (
    <>
      <Link
        className="dialog-info__button"
        to={`/${currentUser.id}`}
      >
        <h3 className="messageList__username">
          {currentUser.data.name}
        </h3>
      </Link>

      <div className="messages" ref={messageScroll}>
      
        {state.dialogsPage.dialogs.map((dialog) =>
          users.map((user) =>
            id == dialog.id && dialog.firstUserId == user.id ? (
              dialog.messages.map((message) => (
                <Message
                  key={message.id}
                  id={message.id}
                  name={user.data.name}
                  text={message.text}
                  fromUserId={message.fromUserId}
                  messageScroll={messageScroll}
                />
              ))
            ) : (
              <></>
            )
          )
        )}
          {
        }
      </div>
      <div className="messageForm">
        <Form>
          <Form.Control
            type="text"
            id="text"
            value={message.text}
            onChange={onChange}
            onKeyDown={handleKeyPress}
          
          />
        </Form>
        <Button
         
          style={{ marginTop: "9px" }}
          variant="success"
          onClick={addMessage}
         
        >
          Send Message
        </Button>
      </div>
    </>
  ):
  <></>;
};

export default MessageList;
