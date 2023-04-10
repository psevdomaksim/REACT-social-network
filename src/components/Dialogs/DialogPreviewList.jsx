import "../css/Dialogs.css";
import DialogPreview from "../Friends/DialogPreview";
import { useContext } from "react";
import { StoreContext } from "../..";
import { useEffect } from "react";
import { fetchUsersActionCreator } from "../../Store/ActionCreators/UsersActionCreators";
import { useState } from "react";
import { Spinner } from "react-bootstrap";
import { fetchDialogsActionCreator } from "../../Store/ActionCreators/MessagesActionCreators";

const DialogsPreviewList = () => {
  const store = useContext(StoreContext);

  let state = store.getState();

  const [users, setUsers] = useState();
  const [dialogs, setDialogs] = useState();

  const fetchUsers = async () => {
    fetchUsersActionCreator().then((data) => {
      store.dispatch(data);
      state = store.getState();
      setUsers(state.usersPage.users);
    });
  };

  const fetchDialogs = async () => {
    fetchDialogsActionCreator().then((data) => {
      store.dispatch(data);
      state = store.getState();
      setDialogs(state.dialogsPage.dialogs);
    });
  };

  useEffect(() => {
    fetchUsers();
    fetchDialogs();
  }, []);

  return users !== undefined && dialogs !== undefined ? (
    <>
      <main className="dialogs">
        <h3 className="dialog-preview__header">Dialogs</h3>
        {users.map((user) =>
          dialogs.map((dialog) =>
            user.id != 69 && dialog.firstUserId == user.id ? (
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
    <Spinner className="spinner" animation="border" variant="secondary" />
  );
};

export default DialogsPreviewList;
