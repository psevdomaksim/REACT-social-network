import '../../App.css';
import '../css/Sidebar.css'


const Post = (props)=>{
    
    return(
      <>
      <div className="post">
        <h4>{props.author}</h4>
        <p>{props.text}</p>
        
        </div>
      
      </>       
    );

}

export default Post;