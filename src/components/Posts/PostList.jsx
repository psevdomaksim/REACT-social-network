import "../../App.css";
import "../css/Content.css";
import { Image, Form, Button } from "react-bootstrap";
import Post from "./Post";
import { useState } from "react";
import { useEffect } from "react";
import { addPost } from "../../controllers/PostsController";
import { useContext } from "react";
import { Context } from "../../index";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  const Posts = useContext(Context);

  const getRandomNumber = () => {
    let min = 1000;
    let max = 9999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  useEffect(() => {
    setPosts(Posts);
  }, []);

  const [post, setPost] = useState({
    id: null,
    author: "",
    text: "",
  });

  const clear = () => {
    setPost({id: null, author:"", text: ""});
  };

  const onChange = (event) => {
    if (event.target.id == "text") {
      setPost({
        ...post,
        id: getRandomNumber(),
        author: "maksos",
        text: event.target.value,
      });
    }
  };

  const addPostFunc = () => {
    console.log(post)
    if (post.text != "") {
      setPosts([...posts, post]);
      addPost(post);
      clear();
    }else{
      return;
    }
  };

  return (
    <>
      <div className="main-posts">
        <h3>My posts</h3>
        <Form>
          <Form.Control as="textarea" id="text" rows={2} value={post.text} onChange={onChange} />
        </Form>
        <Button
          style={{ marginTop: "10px" }}
          variant="success"
          onClick={addPostFunc}
        >
          Send
        </Button>
      </div>

      {posts.map((post) => (
        <Post author={post.author} text={post.text} />
      ))}
    </>
  );
};

export default PostList;
