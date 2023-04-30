import '../../App.css';
import '../css/Dialogs.css'
import {Image} from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useEffect } from 'react';

const Message = (props) => {

  useEffect(() => {
    props.messageScroll.current.scrollTop = props.messageScroll.current.scrollHeight
  }, []);


  return (
    <>
      {props.fromUserId == props.loginId ? (
        <div className="messageMe">
          <h5>Me</h5>
          <p>{props.text}</p>
        </div>
      ) : (
        <div className="message">
          {/* <h5>{props.name}</h5> */}
          <p>{props.text}</p>
        </div>
      )}
    </>
  );
};

export default Message;
