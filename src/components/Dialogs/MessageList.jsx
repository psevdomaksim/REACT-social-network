import "../../App.css";
import state from "../../Store/State";
import Message from "./Message";

const MessageList = (props) => {
  return (
    <>
      <div className="messages">
        {state.dialogsPage.messages.map((message) =>
          state.users.map((user) =>
            (props.id == user.id && props.id == message.fromUserId) ||
            (props.id == message.toUserId && user.name == "maksos") ? (
              <Message
                id={message.id}
                name={user.name}
                text={message.text}
                fromUserId={message.fromUserId}
              />
            ) : (
              <></>
            )
          )
        )}
      </div>
    </>
  );
};

export default MessageList;
