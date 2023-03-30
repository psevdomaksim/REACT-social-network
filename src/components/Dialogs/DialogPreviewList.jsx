import "../css/Dialogs.css";
import DialogPreview from "./DialogPreview";
import { useContext } from "react";
import { StoreContext } from "../..";

const DialogsPreviewList = () => {
  const store = useContext(StoreContext);

  let state = store.getState();

  return (
    <>
      <main className="dialogs">
        <h3>Dialogs</h3>
        {state.usersPage.users.map((user) =>
          state.dialogsPage.dialogs.map((dialog) =>
           (user.id != 69 && dialog.firstUserId==user.id ) ? (
              <DialogPreview
                id={dialog.id}
                avatar={user.avatarImage}
                name={user.name}
                text_preview={dialog.messages[dialog.messages.length -1].text}
              />
            ) : (
              <></>
            )
          )
        )}
      </main>
    </>
  );
};

export default DialogsPreviewList;
