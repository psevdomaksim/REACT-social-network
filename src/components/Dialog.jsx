import "../App.css";
import {Image} from "react-bootstrap";

const Dialog = (props) => {
  return (
    <>
      <div className="dialog-item">
          <Image
          width={50}
          height={50}
          src={props.avatar}
          className="logo"
          href="/"
        /> 
        <div className="dialog-info">
        <h6>{props.name}</h6>
        <p>{props.message}</p>
        </div>
      </div>
       
          
   
    </>
  );
};

export default Dialog;
