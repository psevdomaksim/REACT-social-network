import { Link } from 'react-router-dom';
import '../../App.css';
import '../css/Sidebar.css'


const Post = (props)=>{
    
    return(
      <>
      

      <div className="post">
      <Link className="dialog-info__button" to = {`/${props.userId}`} >
        <h4>{props.authorName}</h4>
        </Link>
        <p>{props.text}</p>
        </div>
      
      </>       
    );

}

export default Post;