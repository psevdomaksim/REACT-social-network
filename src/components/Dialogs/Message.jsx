import '../../App.css';
import '../css/Content.css'
import {Image} from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const Message = (props) => {
  
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

console.log(props)

  return (
    <>
      {props.fromUserId == 69 ? (
        <div className="messageMe">
          <h5>Me</h5>
          <p>{props.text}</p>
        </div>
      ) : (
        <div className="message">
          <h5>{props.name}</h5>
          <p>{props.text}</p>
        </div>
      )}
    </>
  );
};

export default Message;
