import "../css/Dialogs.css";
import DialogPreview from "./DialogPreview";
import { useContext } from "react";
import { StoreContext } from "../..";
import { useEffect } from "react";
import { fetchUsersThunkCreator } from "../../Store/ActionCreators/UsersActionCreators";
import { useState } from "react";
import { Spinner } from "react-bootstrap";
import { fetchDialogsThunkCreator } from "../../Store/ActionCreators/DialogsActionCreators";
import { useParams } from "react-router";

const DialogsPreviewList = () => {
  const store = useContext(StoreContext);
  const {id} = useParams();

  const [users, setUsers] = useState();
  const [dialogs, setDialogs] = useState();
  const [login, setLogin] = useState();

  const fetchUsers = () => {
    store.dispatch(fetchUsersThunkCreator());
  };

  const fetchDialogs = () => {
    if(login!==undefined)store.dispatch(fetchDialogsThunkCreator(login.id));
  };

  store.subscribe(() => 
  { 
    setLogin(store.getState().authPage.currentLogin);
    setUsers(store.getState().usersPage.users)
    setDialogs(store.getState().dialogsPage.dialogs)   
  }
)

  useEffect(() => {
    fetchUsers();
    fetchDialogs();
  }, [id, login]);



  return users !== undefined && dialogs !== undefined  ? (
    <>
      <main className="dialogs">
        <h3 className="dialog-preview__header">Dialogs</h3>
        {
          dialogs.map((dialog) =>
         dialog.userId!==login.id ? (
              <DialogPreview
                key={dialog.id}
                id={dialog.id}
               // avatar={user.data.avatarImage}
               // name={user.data.name}
                text_preview={dialog.lastMessage}
              />
            ) : (
               <DialogPreview
                key={dialog.id}
                id={dialog.id}
               // avatar={user.data.avatarImage}
               // name={user.data.name}
                text_preview={dialog.lastMessage}
            />
            )
          )
      }
      </main>
    </>
  ) : (
    <></>
  );
};

export default DialogsPreviewList;
