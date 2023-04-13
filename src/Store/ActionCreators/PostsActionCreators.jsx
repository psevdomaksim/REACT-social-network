import { addPost, deletePost, fetchPosts } from "../../http/postsAPI";
import { ADD_POST, FETCH_POSTS } from "../../UTILS";

//fetchPosts
export const fetchPostsActionCreator = (data) => {

  return {
    type: FETCH_POSTS,
    data: data,
  };
};

export const fetchPostsThunkCreator = () => {
  return (dispatch) => {
    fetchPosts().then((data)=>{
      dispatch(fetchPostsActionCreator(data));
    })
  }
}

//add post
export const addPostActionCreator = (data) => {

  return {
    type: ADD_POST,
    data: data,
  };
};

export const addPostThunkCreator = (id, text) => {
  let newPost = {
    id: Math.floor(Math.random() * 10000) + 1,
    authorId: 69,
    profileId: id,
    text: text,
  };

  return (dispatch) => {
    addPost(newPost).then((data) => {
      dispatch(addPostActionCreator(data));
    });
    fetchPosts().then((data)=>{
      dispatch(fetchPostsActionCreator(data));
    })
  };
};

//delete post
export const deletePostActionCreator = (data) => {
    return {
      type: ADD_POST,
      data: data,
    };
};

export const deletePostThunkCreator = (postId, authorId) => {
  {
    return (dispatch) => {
    deletePost(postId).then((data)=>{
      dispatch(deletePostActionCreator(data));
    })
    fetchPosts().then((data)=>{
      dispatch(fetchPostsActionCreator(data));
    })
  }
}
}

