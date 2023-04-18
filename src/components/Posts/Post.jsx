import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import "../../App.css";
import "../css/Sidebar.css";

const Post = (props) => {

  return (
    <>
      <div className="post">
        <div className="post-header">
        {   
       <Link className="dialog-info__button" to={`/profile/${props.userId}`}>
              <h4>{props.authorName}</h4>  
          </Link>
          }
          {props.profileId === 69 || props.userId === 69 ? (
            <AiFillDelete
              onClick={() => props.deletePost(props.postId, props.profileId)}
              size={25}
            />
          ) : (
            <></>
          )}
        </div>
        <p>{props.text}</p>
      </div>
    </>
  );
};

export default Post;
