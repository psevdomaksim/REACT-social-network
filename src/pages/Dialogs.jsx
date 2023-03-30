import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DialogPreviewList from "../components/Dialogs/DialogPreviewList";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

function Dialogs() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content-wrapper">
        <Sidebar />
        <DialogPreviewList />
        <div className="dialog-page"></div>

      </div>
    </div>
  );
}

export default Dialogs;
