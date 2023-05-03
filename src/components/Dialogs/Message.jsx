import "../../App.css";
import "../css/Dialogs.css";
import { useEffect } from "react";
import { Card } from "react-bootstrap";

const Message = (props) => {
  useEffect(() => {
    props.messageScroll.current.scrollTop =
      props.messageScroll.current.scrollHeight;
  }, []);

  return (
    <>
      {props.fromUserId == props.loginId ? (
        <Card className="messageMe mt-2 me-2" style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Me</Card.Title>
            <Card.Text>{props.text}</Card.Text>
          </Card.Body>
        </Card>
      ) : (
        <Card className="mt-2 ms-2" style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>{props.text}</Card.Text>
          </Card.Body>
        </Card>
      )}
    </>
  );
};

export default Message;
