import "../css/Dialogs.css";
import DialogPreview from "../Friends/DialogPreview";
import { useContext } from "react";
import { StoreContext } from "../..";
import { useEffect } from "react";
import { fetchUsersThunkCreator } from "../../Store/ActionCreators/UsersActionCreators";
import { useState } from "react";
import { Spinner } from "react-bootstrap";
import { fetchDialogsThunkCreator } from "../../Store/ActionCreators/MessagesActionCreators";

const DialogsPreviewList = () => {
  const store = useContext(StoreContext);

  const [users, setUsers] = useState();
  const [dialogs, setDialogs] = useState();

  const fetchUsers = () => {
    store.dispatch(fetchUsersThunkCreator());
  };


  const fetchDialogs = () => {
    store.dispatch(fetchDialogsThunkCreator());
   
  };

  store.subscribe(() => 
  { 
    setUsers(store.getState().usersPage.users)
    setDialogs(store.getState().dialogsPage.dialogs)   
  }
)

  useEffect(() => {
    fetchUsers();
    fetchDialogs();
  }, []);

  return users !== undefined && dialogs !== undefined  ? (
    <>
      <main className="dialogs">
        <h3 className="dialog-preview__header">Dialogs</h3>
        {users.map((user) =>
          dialogs.map((dialog) =>
            user.id != 69 && (dialog.firstUserId == user.id || dialog.secondUserId == user.id)  ? (
              <DialogPreview
                key={dialog.id}
                id={dialog.id}
                avatar={user.data.avatarImage}
                name={user.data.name}
                text_preview={dialog.messages[dialog.messages.length - 1].text}
              />
            ) : (
              <></>
            )
          )
        )}
      </main>
    </>
  ) : (
    <></>
  );
};

export default DialogsPreviewList;
