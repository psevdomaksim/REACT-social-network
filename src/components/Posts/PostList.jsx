import '../../App.css';
import '../css/Content.css'
import { Image, Form, Button } from "react-bootstrap";
import Post from "./Post";
import { Posts } from './PostItem';

const PostList = ()=>{
    
    return(
      <>
        <div className="main-posts">
          <h3>My posts</h3>
          <Form>
         
              <Form.Control as="textarea" rows={2} />
        
          </Form>
          <Button style={{marginTop: '10px'}}  variant="success">Send</Button>
        </div>
         
            {
          Posts.map (post =>  (
            <Post text={post.text}/>
          ))
        }
     
      </>       
    );

}

export default PostList;