import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import "../../App.css";
import "../css/Sidebar.css";
import "../css/Content.css";

const Post = (props) => {

  return (
    <>
      <div className="post">
        <div className="post-header">
       
        
       <Link className="post-header_user-data" to={`/profile/${props.userId}`}>
       <Image
          width={50}
          height={50}
          src={require("../../assets/images/" + props.authorAvatar)}
          className="post-avatar"
        /> 
              <h4>{props.authorName}</h4>  
          </Link>
          
          
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
