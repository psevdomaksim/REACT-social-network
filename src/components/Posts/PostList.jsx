import "../../App.css";
import "../css/Content.css";
import { Image, Form, Button, Spinner } from "react-bootstrap";
import Post from "./Post";
import { useState } from "react";
import {
  addPostActionCreator,
  deletePostActionCreator,
  fetchPostsActionCreator,
} from "../../Store/ActionCreators/PostsActionCreators";
import { StoreContext } from "../../index";
import { useContext } from "react";
import { useParams } from "react-router";
import { useEffect } from "react";

const PostList = () => {
  const { id } = useParams();

  const store = useContext(StoreContext);

  let state = store.getState();


  const [posts, setPosts] = useState();

  const fetchPosts = async () => {

    fetchPostsActionCreator().then((data) => {
      store.dispatch(data);
      state = store.getState();
      setPosts(state.profilePage.posts);
    });

  };


  useEffect(() => {
    fetchPosts();
  }, []);

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

  const deletePost = async (postId, auhtorId) => {
    deletePostActionCreator(postId, auhtorId).then((data) => {
      store.dispatch(data);
      fetchPosts();
    });
  };

  const addPost = async () => {
    if (post.text !== "") {
      addPostActionCreator(post.text, +id).then((data) => {
        store.dispatch(data);
        fetchPosts();
      });

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
        state.usersPage.users.map((user) =>
          user.id == post.authorId && id == post.profileId ? (
            <Post
              deletePost={deletePost}
              key={post.id}
              postId={post.id}
              userId={user.id}
              profileId={+id}
              authorName={user.data.name}
              text={post.text}
            />
          ) : (
            <></>
          )
        )
      )}
    </>
  ) : (
    <Spinner className="spinner" animation="border" variant="secondary" />
  );
};

export default PostList;
