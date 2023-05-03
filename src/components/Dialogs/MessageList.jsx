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

  const [login, setLogin] = useState();
  const [currentUser, setCurrentUser] = useState();
  const [currentDialog, setCurrentDialog] = useState();
  const [dialogMessages, setDialogMessages] = useState();

  const fetchUsers = () => {
    store.dispatch(fetchUsersThunkCreator());
  };

  const fetchOneDialog = () => {
    if(login!==undefined)
    {
      store.dispatch(fetchOneDialogThunkCreator(id, login.id));
    }
  };



  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    fetchOneDialog();
  }, [id, login]);

  store.subscribe(() => {
    setCurrentDialog(store.getState().dialogsPage.currentDialog);
    setCurrentUser(store.getState().usersPage.currentUser);
    setDialogMessages(store.getState().messagesPage.messages);
    setLogin(store.getState().authPage.currentLogin)
  });

  
  const addMessage = () => {
    if (message.text !== "") {
      store.dispatch(addMessageThunkCreator(currentDialog, message.text, login.id));
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
      {currentUser !== undefined ? (
     
          <h3 className="messageList__username">  
           <Link className="dialog-info__button" to={`/profile/${currentUser.id}`}>
            {currentUser.data.name} 
            </Link>
          </h3>
       
      ) : (
        <></>
      )}

      {currentDialog !== undefined && dialogMessages!==undefined ? (
        <div className="messages" ref={messageScroll}>
          { 
                dialogMessages.map((message) => (
                  <Message
                    key={message.id}
                    id={message.id}
                    name={message.fromUserName}
                    text={message.text}
                    fromUserId={message.fromUserId}
                    loginId={login.id}
                    messageScroll={messageScroll}
                  />
                ))
              
          
        }
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
