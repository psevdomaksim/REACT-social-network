import "../css/Users.css";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";


const User = (props) => {


  return (
    <>
      <div className="user-item">
        <Link to={`/profile/${props.id}`}>
          <Image
            width={70}
            height={70}
            src = {require("../../assets/images/" + props.user.avatarImage)}
            className="preview-image"
            href="/"
          />
        </Link>
        <div className="user-item__data">
          <h5>
            <Link className="user-item__name" to={`/profile/${props.id}`}>
              {props.user.name}
            </Link>
          </h5>

          <p className="user-item__status">{props.user.status}</p>
        </div>
      </div>
    </>
  );
};

export default User;
