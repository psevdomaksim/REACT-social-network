import "../../App.css";
import "../css/Content.css";
import { Image, Form, Button } from "react-bootstrap";
import Post from "./Post";
import { useState } from "react";
import { addPostActionCreator } from "../../Store/ActionCreators/PostsActionCreators";
import { StoreContext  } from "../../index";
import { useContext } from "react";


const PostList = () => {

  const store = useContext(StoreContext);

  let state = store.getState();

  const [post, setPost] = useState({
    text: "",
  });

  const clear = () => {
    setPost({
      text: "",
    });
  };

  const onChange = (event) => {
    if (event.target.id == "text") {
      setPost({
        ...post,
        text: event.target.value,
      });
    }
  };


  const addPost = () => {
    if (post.text != "") {
      store.dispatch(addPostActionCreator(post.text));
      clear();
    } 
    else {return}
  };

  return (
    <>
      <div className="main-posts">
        <h3>My posts</h3>
        <Form>
          <Form.Control
            as="textarea"
            id="text"
            rows={2}
            value={post.text}
            onChange={onChange}
          />
        </Form>
        <Button
          style={{ marginTop: "10px" }}
          variant="success"
          onClick={addPost}
        >
          Send
        </Button>
      </div>

      {state.profilePage.posts.map((post) =>
        state.usersPage.users.map((user) =>
          user.id == post.authorId ? (
            <Post authorName={user.name} text={post.text} />
          ) : (
            <></>
          )
        )
      )}
    </>
  );
};

export default PostList;
