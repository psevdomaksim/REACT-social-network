import '../../App.css';
import DialogPage from "../../pages/DialogPage";
import DialogPreview from "./DialogPreview";
import state from "../../Store/State"

const DialogsPreviewList = () => {
  return (
    <>
      <main className="dialogs">
        <div className="dialog-preview">
          <h3>Dialogs</h3>
        {
          state.users.map (user =>  (
           user.id != 69 ?
            <DialogPreview id = {user.id} avatar={user.avatarImage} name = {user.name} text_preview="priva"/>
            :
            <></>
            
          ))
        }
        </div>       
      </main>
    </>
  );
};

export default DialogsPreviewList;
