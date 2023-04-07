import "../css/Users.css";
import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const Friend = (props) => {


  return (
    <>
      <div className="user-item">
        <Link to={`/${props.id}`}>
          <Image
            width={70}
            height={70}
            src = {require("../../assets/images/" + props.user.avatarImage)}
            className="preview-image"
            href="/"
          />
        </Link>
        <div className="user-item__card">
          <h5>
            <Link className="user-item__name" to={`/${props.id}`}>
              {props.user.name}
            </Link>
          </h5>
        <div className="addFriendButton">
          <p className="user-item__status">{props.user.status}</p>
          <Button variant="secondary" size="sm">Remove user from friends</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Friend;
