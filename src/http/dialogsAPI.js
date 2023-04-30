import { $host } from "./http";

export const fetchDialogs = async (id) => {
  const { data } = await $host.get(`/dialogs`,{
  params:{
    userId: id
  }}
  
  );
  return data;
};

export const fetchOneDialog = async (id) => {
  const { data } = await $host.get("/dialogs/" + id);
  return data;
};

export const updateDialogLastMessage = async (id, body) => {
  const { data } = await $host({
    method: "PUT",
    url: `/dialogs/${id}`,
    data: body,
  });
  return data;
};

export const createNewDialog = async (newDialog) => {
  const { data } = await $host({
    method: "POST",
    url: "/dialogs",
    data: newDialog,
  });
  return data;
};
