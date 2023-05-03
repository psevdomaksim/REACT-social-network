import "../css/Users.css";
import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const FriendRequest = (props) => {
  return (
    <>
      <div className="user-item">
        <Link to={`/profile/${props.friendRequest.requestSenderId}`}>
          <Image
            width={70}
            height={70}
            src={"http://localhost:4200/" + props.user.avatarImage}
            className="preview-image"
            href="/"
          />
        </Link>
        <div className="user-item__card">
          <h5>
            <Link className="user-item__name" to={`/profile/${props.friendRequest.requestSenderId}`}>
              {props.user.name}
            </Link>
          </h5>
          <div className="addFriendButton">
            <p className="user-item__status">{props.user.status}</p>

            {
              props.friendRequest.userId==props.loginId?
              <>
                   <Button
                variant="success"
                size="sm"
                onClick={() => props.acceptFriendRequest(props.friendRequest)}
              >
                Accept
              </Button>
              <Button
                variant="danger"
                size="sm"
                onClick={() => props.rejectFriendRequest(props.friendRequest)}
              >
                Reject
              </Button>
              </>
            
              :<></>
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default FriendRequest;
