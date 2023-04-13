import "../../App.css";
import "../css/Content.css";
import { Image, Form, Button, Spinner } from "react-bootstrap";
import Post from "./Post";
import { useState } from "react";
import {
  addPostActionCreator,
  addPostThunkCreator,
  deletePostActionCreator,
  deletePostThunkCreator,
  fetchPostsActionCreator,
  fetchPostsThunkCreator,
} from "../../Store/ActionCreators/PostsActionCreators";
import { StoreContext } from "../../index";
import { useContext } from "react";
import { useParams } from "react-router";
import { useEffect } from "react";

const PostList = () => {
  const { id } = useParams();

  const store = useContext(StoreContext);

  const [posts, setPosts] = useState();


  const fetchPosts = () => {
    store.dispatch(fetchPostsThunkCreator(id));
  };

  store.subscribe(() => {
    setPosts(store.getState().profilePage.posts);
  });

 
  useEffect(() => {
    fetchPosts();
  }, [store]);

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

  const deletePost = (postId, profileId) => {
    store.dispatch(deletePostThunkCreator(postId, profileId))
  };

  const addPost = () => {
    if (post.text !== "") {
      store.dispatch(addPostThunkCreator(+id, post.text));
      clear();
    } else {
      return;
    }
  };


  return posts !== undefined ? (
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

      {posts.map((post) =>    
           (
            <Post
              deletePost={deletePost}
              key={post.id}
              postId={post.id}
              userId={post.authorId}
              profileId={+id}
              //authorName={user.data.name}
              text={post.text}
            />
          ) 
        
      )}
    </>
  ) : (
    <Spinner className="spinner" animation="border" variant="secondary" />
  );
};

export default PostList;
