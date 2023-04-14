import { $host } from "./http";

export const fetchMessages = async (dialogId) => {
  const { data } = await $host.get(`/dialogs/${dialogId}/messages`);
  return data;
};



export const addMessage = async (dialogId, body) => {
  const { data } = await $host({
    method: "POST",
    url: `/dialogs/${dialogId}/messages`,
    data: body,
  });
  return data;
};


