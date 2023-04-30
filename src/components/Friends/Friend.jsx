import "../css/Users.css";
import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const Friend = (props) => {
  return (
    <>
      <div className="user-item">
        <Link to={`/profile/${props.friendId}`}>
          <Image
            width={70}
            height={70}
            src={require("../../assets/images/" + props.user.avatarImage)}
            className="preview-image"
            href="/"
          />
        </Link>
        <div className="user-item__card">
          <h5>
            <Link className="user-item__name" to={`/profile/${props.friendId}`}>
              {props.user.name}
            </Link>
          </h5>
          <div className="addFriendButton">
            <p className="user-item__status">{props.user.status}</p>

            {
              props.userId===props.loginId?
              <Button
                variant="secondary"
                size="sm"
                onClick={() => props.deleteFriend(props.userId, props.friendId)}
              >
                Remove friend
              </Button>
              :<></>
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Friend;
