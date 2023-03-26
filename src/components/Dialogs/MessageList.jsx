import "../../App.css";
import { Messages, Users } from "../STATE";
import Message from "./Message";

const MessageList = (props) => {


  return (
    <>
    <div className="messages">
      {Messages.map((message) =>
        Users.map((user) =>
          props.id == user.id && props.id == message.fromUserId || props.id == message.toUserId && user.name=="maksos" ? (
            <Message id={message.id} name={user.name} text={message.text} fromUserId = {message.fromUserId}/>
          ) :
          <></>
        )
      )}
      </div>
    </>
  );
};

export default MessageList;
