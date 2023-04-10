import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import "../../App.css";
import "../css/Sidebar.css";

const Post = (props) => {

  return (
    <>
      <div className="post">
      <div className="post-header">
        <Link className="dialog-info__button" to={`/${props.userId}`}>
          <h4>{props.authorName}</h4>
        </Link>
        <AiFillDelete onClick={() => props.deletePost(props.postId)} size={25} />
        </div>
        <p>{props.text}</p>
       
      </div>
    </>
  );
};

export default Post;
