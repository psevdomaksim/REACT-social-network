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

const MessageList = () => {
  const { id } = useParams();

  const messageScroll = useRef(null);

  const store = useContext(StoreContext);

  let state = store.getState();

  const fetchOneUserByDialog = () => {
    let user;
    let dialog = state.dialogsPage.dialogs.find((dialog) => dialog.id == id);
    state.usersPage.users.map((u) =>
      u.id == dialog.firstUserId ? (user = u) : <></>
    );
    return user;
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

  return (
    <>
      <Link
        className="dialog-info__button"
        to={`/${fetchOneUserByDialog().id}`}
      >
        <h3 className="messageList__username">
          {fetchOneUserByDialog().data.name}
        </h3>
      </Link>

      <div className="messages" ref={messageScroll}>
      
        {state.dialogsPage.dialogs.map((dialog) =>
          state.usersPage.users.map((user) =>
            id == dialog.id && dialog.firstUserId == user.id ? (
              dialog.messages.map((message) => (
                <Message
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
          type="submit"
          style={{ marginTop: "9px" }}
          variant="success"
          onClick={addMessage}
      
        >
          Send Message
        </Button>
      </div>
    </>
  );
};

export default MessageList;
