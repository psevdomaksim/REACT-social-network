import "../css/Dialogs.css";

import Message from "./Message";
import { Image, Form, Button } from "react-bootstrap";
import { useParams } from "react-router";
import { useContext } from "react";
import { useState } from "react";
import { StoreContext } from "../..";
import { addMessageActionCreator } from "../../Store/ActionCreators/MessagesActionCreators";
//import state from "../../Store/State";

const MessageList = () => {
  const { id } = useParams();

   const store = useContext(StoreContext);

   let state = store.getState()

  const [message, setMessage] = useState({
    text: "",
  });
  const clear = () => {
    setMessage({
      text: "",
    });
  };

  const onChange = (event) => {
    if (event.target.id == "text") {
      setMessage({
        ...message,
        text: event.target.value,
      });
    }
  };

  const addMessage = () => {
    if (message.text != "") {
      store.dispatch(addMessageActionCreator(message.text, id));
      clear();
    } else {
      return;
    }
  };


  return (
    <>
      <div className="messages">
        {state.dialogsPage.dialogs.map((dialog) =>
          state.usersPage.users.map((user) =>
            (id == dialog.id) && (dialog.firstUserId==user.id)  ? (
              dialog.messages.map((message) => (
                <Message
                  id={message.id}
                  name={user.name}
                  text={message.text}
                  fromUserId={message.fromUserId}
                />
              ))
            ) : (
              <></>
            )
          )
        )}
      </div>
      <div className="messageForm">
        <Form>
          <Form.Control
            as="textarea"
            id="text"
            rows={2}
            value={message.text}
            onChange={onChange}
          />
        </Form>
        <Button
          style={{ marginTop: "10px" }}
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
