import "../css/Users.css";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const User = (props) => {
  return (
    <>
      <div className="user-item">
        <Link to={`/${props.id}`}>
          <Image
            width={70}
            height={70}
            src={props.user.avatarImage}
            className="preview-image"
            href="/"
          />
        </Link>
        <div className="user-item__data">
          <Link className="user-item__name" to={`/${props.id}`}>
            <h5 >{props.user.name}</h5>
          </Link>

          <p className="user-item__status">{props.user.status}</p>
        </div>
      </div>
    </>
  );
};

export default User;
