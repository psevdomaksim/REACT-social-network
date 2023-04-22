import { addPost, deletePost, fetchPosts } from "../../http/postsAPI";
import { ADD_POST, CHANGE_PAGE, CHANGE_PROFILE, DELETE_POST, FETCH_POSTS } from "../../UTILS";

//fetchPosts
export const fetchPostsActionCreator = (data) => {
  return {
    type: FETCH_POSTS,
    data: data
  };
};

export const fetchPostsThunkCreator = (profileId, limit, page) => {
  return (dispatch) => {
    fetchPosts(profileId, limit, page).then((data) => {
      dispatch(fetchPostsActionCreator(data));
    });
  };
};

//add post
export const addPostActionCreator = (data) => {
  return {
    type: ADD_POST,
    data: data,
  };
};

export const addPostThunkCreator = (user, text) => {
  let newPost = {
    id: Math.floor(Math.random() * 10000) + 1,
    authorId: 69,
    authorName: user.data.name,
    authorAvatarImage: user.data.avatarImage,
    userId: user.id,
    text: text,
    date: new Date(),
  };

  return (dispatch) => {
    addPost(newPost).then((data) => {
      dispatch(addPostActionCreator(data));
    });
  };
};

//delete post
export const deletePostActionCreator = (data, postId) => {
  return {
    type: DELETE_POST,
    data: data,
    id: postId
  };
};

export const deletePostThunkCreator = (postId) => {
  {
    return (dispatch) => {
      deletePost(postId).then((data) => {
        dispatch(deletePostActionCreator(data, postId))
      });
    };
  }
};

//change page

export const changePageActionCreator = (page) => {
  return {
    type: CHANGE_PAGE,
    page: page,
  };
};

//change profile

export const changeProfileActionCreator = (data) => {

  return {
    type: CHANGE_PROFILE,
    data: data
  };
};

export const changeProfileThunkCreator = (profileId, limit, page) => {
  return (dispatch) => {
    fetchPosts(profileId, limit, page).then((data) => {
      dispatch(changeProfileActionCreator(data));
    });
  };
};