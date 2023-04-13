import { $host } from "./http";

export const fetchPosts = async () => {
  const { data } = await $host.get("/posts");
  return data;
};

export const addPost = async (newPost) => {
  const { data } = await $host({
    method: "POST",
    url: `/posts`,
    data: newPost,
  });
  return data;
};

export const deletePost = async (id) => {
  const { data } = await $host.delete("/posts/" + id);
  return data;
};

