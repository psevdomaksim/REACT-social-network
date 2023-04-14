import "../css/Dialogs.css";
import Message from "./Message";
import { Form, Button, Spinner } from "react-bootstrap";
import { useParams } from "react-router";
import { useContext } from "react";
import { useState, useEffect } from "react";
import { StoreContext } from "../..";
import {
  addMessageThunkCreator,
  fetchMessagesThunkCreator,
} from "../../Store/ActionCreators/MessagesActionCreators";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { fetchUsersThunkCreator } from "../../Store/ActionCreators/UsersActionCreators";
import { fetchOneDialogThunkCreator } from "../../Store/ActionCreators/DialogsActionCreators";

const MessageList = () => {
  const { id } = useParams();

  const messageScroll = useRef(null);

  const store = useContext(StoreContext);

  const [users, setUsers] = useState();

  const [currentUser, setCurrentUser] = useState();
  const [currentDialog, setCurrentDialog] = useState();
  const [dialogMessages, setDialogMessages] = useState();

  const fetchUsers = () => {
    store.dispatch(fetchUsersThunkCreator());
  };

  const fetchOneDialog = () => {
    store.dispatch(fetchOneDialogThunkCreator(id));
  };



  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    fetchOneDialog();
    
  }, [id]);

  store.subscribe(() => {
    setUsers(store.getState().usersPage.users);
    setCurrentDialog(store.getState().dialogsPage.currentDialog);
    setCurrentUser(store.getState().usersPage.currentUser);
    setDialogMessages(store.getState().messagesPage.messages);
  });


const isEmpty = () => {
  if (currentUser!== undefined) {
    return Object.keys(currentUser).length === 0;
  }
}

  const addMessage = () => {
    if (message.text !== "") {
      store.dispatch(addMessageThunkCreator(currentDialog, message.text));
      clear();
    } else {
      return;
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

  return (
    <>
      {!isEmpty() && currentUser !== undefined ? (
        <Link className="dialog-info__button" to={`/profile/${currentUser.id}`}>
          <h3 className="messageList__username">{currentUser.data.name}</h3>
        </Link>
      ) : (
        <></>
      )}

      {currentDialog !== undefined && dialogMessages!==undefined ? (
        <div className="messages" ref={messageScroll}>
          {users.map((user) =>
              currentDialog.firstUserId == user.id ? (
                dialogMessages.map((message) => (
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
          
          )}
        </div>
      ) : (
        <Spinner className="spinner" animation="border" variant="secondary" />
      )}

      <div className="message-form">
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
  );
};

export default MessageList;
