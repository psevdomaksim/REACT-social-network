import { $host } from "./http";


export const fetchPosts = async (profileId) => {
  const { data } = await $host.get(`/posts`, {
      params:{
        userId: profileId,
        //_limit:2,
       // _page: 4,
      }
   }
  
  );
  return data;
};

export const addPost = async (newPost) => {
  const { data } = await $host({
    method: "POST",
    url: "/posts",
    data: newPost,
  });
  return data;
};

export const deletePost = async (postId) => {
  const { data } = await $host.delete(`/posts/${postId}`);
  return data;
};

