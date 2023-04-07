import "../css/Dialogs.css";
import DialogPreview from "./DialogPreview";
import { useContext } from "react";
import { StoreContext } from "../..";
import { useEffect } from "react";
import { fetchUsersActionCreator } from "../../Store/ActionCreators/UsersActionCreators";
import { useState } from "react";

const DialogsPreviewList = () => {
  const store = useContext(StoreContext);

  let state = store.getState();

  const [users, setUsers] = useState();

   const fetchUsers = async () =>{
     fetchUsersActionCreator().then((data) => {
        store.dispatch(data);
        state = store.getState();
        setUsers(state.usersPage.users);
      });
 }


  useEffect(() => {
    fetchUsers();
  }, []);

  return users!==undefined ?(
    <>
    
      <main className="dialogs">
        <h3 className="dialog-preview__header">Dialogs</h3>
        {users.map((user) =>
          state.dialogsPage.dialogs.map((dialog) =>
           (user.id != 69 && dialog.firstUserId==user.id ) ? (
              <DialogPreview
                key={dialog.id}
                id={dialog.id}
                avatar={user.data.avatarImage}
                name={user.data.name}
                text_preview={dialog.messages[dialog.messages.length -1].text}
              />
            ) : (
              <></>
            )
          )
        )}
      </main>
    </>
  ):
  <></>;
};

export default DialogsPreviewList;
