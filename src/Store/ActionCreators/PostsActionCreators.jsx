import axios from "axios";
import { ADD_POST, FETCH_POSTS } from "../../UTILS";

const getRandomId = () => {
  let min = 1000;
  let max = 9999;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const addPostActionCreator = async (text, id) => {
  let newPost = {
    id: getRandomId(),
    authorId: 69,
    profileId: id,
    text: text,
  };

  const { data } = await axios.post("http://localhost:4200/posts", newPost);

  return {
    type: ADD_POST,
    data: data,
  };
};

export const deletePostActionCreator = async (postId) => {
  const { data } = await axios.delete(`http://localhost:4200/posts/${postId}`);
  return {
    type: ADD_POST,
    data: data,
  };
};

export const fetchPostsActionCreator = async () => {
  const { data } = await axios.get("http://localhost:4200/posts");

  return {
    type: FETCH_POSTS,
    data: data,
  };
};
