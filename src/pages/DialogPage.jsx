import "../App.css";
import DialogsPreviewList from "../components/Dialogs/DialogPreviewList";
import MessageList from "../components/Dialogs/MessageList";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const DialogPage = () => {
  return (
    <>
      <Header />
      <div className="wrapper">
        <div className="content-wrapper">
          <Sidebar />
          <DialogsPreviewList />
          <div className="dialog-page">
            <MessageList />
          </div>
        </div>
      </div>
    </>
  );
};

export default DialogPage;
