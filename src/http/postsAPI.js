import { $host, $authHost } from "./http";


export const fetchPosts = async (profileId, limit, page) => {
  const { data } = await $host.get(`/posts`, {
      params:{
        userId: profileId,
        _limit: limit,
        _page: page,
      }
   }
  
  );
  return data;
};

export const addPost = async (newPost) => {
  const { data } = await $authHost({
    method: "POST",
    url: "/posts",
    data: newPost,
  });
  return data;
};

export const deletePost = async (postId) => {
  const { data } = await $authHost.delete(`/posts/${postId}`);
  return data;
};

