import '../css/Dialogs.css'
import {Image} from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const DialogPreview = (props) => {
  

  return (
    <>
    <Link className="dialog-info__button" to = {`/dialogs/${props.id}`} >
      <div className="dialog-item">
          <Image
          width={50}
          height={50}
          src={props.avatar}
          className="preview-image"
          href="/"
        /> 
        <div className="dialog-info">
        <h6>{props.name}</h6>
        <p className="dialog-info__text">{props.text_preview}</p>
        </div>
      </div>
    </Link>
          
   
    </>
  );
};

export default DialogPreview;
