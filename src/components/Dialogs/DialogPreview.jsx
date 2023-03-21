import '../../App.css';
import {Image} from "react-bootstrap";
import { Link } from "react-router-dom";

const DialogPreview = (props) => {
  return (
    <>
    <Link to = {`/dialogs/id:${props.id}`} >
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
        <p>{props.text_preview}</p>
        </div>
      </div>
    </Link>
          
   
    </>
  );
};

export default DialogPreview;
