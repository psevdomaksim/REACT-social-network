import '../../App.css';
import DialogPage from "../../pages/DialogPage";
import DialogPreview from "./DialogPreview";
import { Users } from "../UserItem";

const DialogsPreviewList = () => {
  return (
    <>
      <main className="dialogs">
        <div className="dialog-preview">
          <h3>Dialogs</h3>
        {
          Users.map (user =>  (
            <DialogPreview id = {user.id} avatar={user.avatarImage} name = {user.name} text_preview="priva"/>
          ))
        }
        </div>       
      </main>
    </>
  );
};

export default DialogsPreviewList;
