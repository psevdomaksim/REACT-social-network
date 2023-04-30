import { $authHost } from "./http";

export const fetchMessages = async (dialogId) => {
  const { data } = await $authHost.get(`/dialogs/${dialogId}/messages`);
  return data;
};



export const addMessage = async (dialogId, body) => {
  const { data } = await $authHost({
    method: "POST",
    url: `/dialogs/${dialogId}/messages`,
    data: body,
  });
  return data;
};


