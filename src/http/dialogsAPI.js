import { $host } from "./http";

export const fetchDialogs = async () => {
  const { data } = await $host.get("/dialogs");
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
