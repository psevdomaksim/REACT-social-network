import "../components/css/Dialogs.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DialogPreviewList from "../components/Dialogs/DialogPreviewList";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { BiMessageRounded } from "react-icons/bi";

function Dialogs() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content-wrapper">
        <Sidebar />
        <DialogPreviewList />
        <div className="dialog-page">
          <div className="chooseChatBlock">
            <BiMessageRounded size={40} /> Выберите чат
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
