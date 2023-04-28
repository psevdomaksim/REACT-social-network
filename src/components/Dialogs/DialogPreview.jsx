import "../css/Dialogs.css";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const DialogPreview = (props) => {

  return (
    <>
      <Link className="dialog-info__button" to={`/dialogs/${props.id}`}>
        <div className="dialog-item">
          <Image
            roundedCircle="true"
            width={50}
            height={50}
            src={require("../../assets/images/" + props.avatar)}
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
