import { addPost, deletePost, fetchPosts } from "../../http/postsAPI";
import { ADD_POST, DELETE_POST, FETCH_POSTS } from "../../UTILS";

//fetchPosts
export const fetchPostsActionCreator = (data) => {

  return {
    type: FETCH_POSTS,
    data: data,
  };
};

export const fetchPostsThunkCreator = (profileId) => {
  return (dispatch) => {
    fetchPosts(profileId).then((data)=>{
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

export const addPostThunkCreator = (profileId, text) => {
  let newPost = {
    id: Math.floor(Math.random() * 10000) + 1,
    authorId: 69,
    userId: profileId,
    text: text,
  };

  return (dispatch) => {
    addPost(newPost).then((data) => {
      dispatch(addPostActionCreator(data));

      fetchPosts(profileId).then((data)=>{
        dispatch(fetchPostsActionCreator(data));
      })

    });
  };
};

//delete post
export const deletePostActionCreator = (data) => {
    return {
      type: DELETE_POST,
      data: data,
    };
};

export const deletePostThunkCreator = (postId, profileId) => {
  {
    return (dispatch) => {
    deletePost(postId).then((data)=>{
      dispatch(deletePostActionCreator(data));

      fetchPosts(profileId).then((data)=>{
        dispatch(fetchPostsActionCreator(data));
      })

    })
 

  }
}
}

