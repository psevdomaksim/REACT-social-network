import { $host, $authHost } from "./http";

export const fetchDialogs = async (loginId) => {
  let { data } = await $authHost.get(`/dialogs`,{
  params:{
    userId: loginId
  }}  
  );

  await $authHost.get(`/dialogs`,{
    params:{
      secondUserId: loginId
    }}  
    ).then(result => (
      data = [...data, ...result.data.filter((dialog) => dialog.userId !== loginId)])    
      )
 

  return data;
};

export const fetchOneDialog = async (id) => {
  const { data } = await $authHost.get("/dialogs/" + id);
  return data;
};

export const updateDialogLastMessage = async (id, body) => {
  const { data } = await $authHost({
    method: "PUT",
    url: `/dialogs/${id}`,
    data: body,
  });
  return data;
};

export const createNewDialog = async (newDialog) => {
  const { data } = await $authHost({
    method: "POST",
    url: "/dialogs",
    data: newDialog,
  });
  return data;
};
