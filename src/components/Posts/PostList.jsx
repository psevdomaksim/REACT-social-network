import "../../App.css";
import "../css/Content.css";
import { Image, Form, Button } from "react-bootstrap";
import Post from "./Post";
import { Posts } from "../STATE";
import { useState } from "react";
import { useEffect } from "react";


const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(Posts);
  }, []);

  const [post, setPost] = useState({
    author: "",
    text: "",
  });


  const clear = () => {
    setPost({text: "" });
  };

  const onChange = (event) => {
    if (event.target.id == "text") {
      setPost({ ...post, author: "maksos", text: event.target.value });
    }
  };

  let addPost = () => {
    setPosts([...posts, post]);
    clear()
  };


  console.log(...posts);
  return (
    <>
      <div className="main-posts">
        <h3>My posts</h3>
        <Form>
          <Form.Control as="textarea" id="text" rows={2} onChange={onChange} />
        </Form>
        <Button
          style={{ marginTop: "10px" }}
          variant="success"
          onClick={addPost}
        >
          Send
        </Button>
      </div>

      {Posts.map((post) => (
        <Post author={post.author} text={post.text} />
      ))}
    </>
  );
};

export default PostList;
