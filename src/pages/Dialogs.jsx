import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DialogsContent from "../components/DialogsContent";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

function Dialogs() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content-wrapper">
        <Sidebar />
        <DialogsContent />
      </div>
    </div>
  );
}

export default Dialogs;
