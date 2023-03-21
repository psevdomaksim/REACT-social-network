import "../App.css";
import DialogsPreviewList from "../components/Dialogs/DialogPreviewList";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Users } from "../components/UserItem";

const DialogPage = (props) => {
  return (
    <>
    <div className="wrapper">
      <Header />
      <div className="content-wrapper">
        <Sidebar />
        <DialogsPreviewList />
        <div className="dialog-page">
          
          MESSAGE
        </div>
      </div>
    </div>
     
              
    </>
  );
};

export default DialogPage;
