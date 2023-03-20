import "../App.css";
import Dialog from "./Dialog";

const DialogsContent = () => {
  return (
    <>
      <main className="dialogs">
        <h3>Dialogs</h3>
        <Dialog avatar= {require("../images/dialog_ava.jpg")} name ="katanacss" message="priva"/>
        <Dialog avatar= {require("../images/dialog_ava.jpg")} name ="aikko" message="yo"/>
        <Dialog avatar= {require("../images/dialog_ava.jpg")} name ="INSPACE" message="go feat"/>
      </main>
    </>
  );
};

export default DialogsContent;
