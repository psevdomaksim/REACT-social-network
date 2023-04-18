import "../../App.css";
import "../css/Content.css";
import { Image, Form, Button, Spinner } from "react-bootstrap";
import Post from "./Post";
import { useRef, useState } from "react";
import {
  addPostThunkCreator,
  changePageActionCreator,
  changeProfileActionCreator,
  changeProfileThunkCreator,
  deletePostThunkCreator,
  fetchPostsThunkCreator,
} from "../../Store/ActionCreators/PostsActionCreators";
import { StoreContext } from "../../index";
import { useContext } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";

const PostList = (props) => {
  const { id } = useParams();
  const store = useContext(StoreContext);

  const [posts, setPosts] = useState([]);

  const [limit, setLimit] = useState(store.getState().profilePage.limit);
  const[page, setPage] = useState(1);

  const observer = useRef(null);
 
  const [loadData, setLoadData] = useState(true);   

  const fetchPosts = () => {
    setLoadData(true);
    store.dispatch(changePageActionCreator(page))
    store.dispatch(fetchPostsThunkCreator(id, limit, page));
    setLoadData(false);
  };

  const changeProfile = () => {
    store.dispatch(changeProfileThunkCreator(id, limit, 1))
  }

  store.subscribe(() => {
    setPosts(store.getState().profilePage.posts);
  });


   useEffect(() => {
     setPage(1)
     changeProfile();
   }, [id]);


  useEffect(() => {
   if(page!==1) fetchPosts();
  }, [page]);

  useEffect(() => {
    if (props.trigger === null && loadData && page === undefined ) return;
    if (observer.current) observer.current.disconnect();
    if (page > limit) return;
    const callback = function (entries, observer) {
      if (entries[0].isIntersecting) { 
        setPage(page => page + 1)       
      }
    };
    observer.current = new IntersectionObserver(callback);
    observer.current.observe(props.trigger.current);
  }, [id]);

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
    store.dispatch(deletePostThunkCreator(postId, profileId));
  };

  const addPost = () => {
    if (post.text !== "") {
      store.dispatch(addPostThunkCreator(props.user, post.text));
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

      {posts.map((post) => (
        <Post
          deletePost={deletePost}

          postId={post.id}
          userId={post.authorId}
          profileId={props.user.id}
          authorName={post.authorName}
          text={post.text}
        />
      ))}
    </>
  ) : (
    <Spinner className="spinner" animation="border" variant="secondary" />
  );
};

export default PostList;
