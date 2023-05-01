import "../App.css";
import Header from "../components/Header";
import ProfileEdit from "../components/ProfileEdit";
import Sidebar from "../components/Sidebar";


function EditProfilePage() {

  return (
    <>
      <Header />
      <div className="wrapper">
        <div className="content-wrapper">
          <Sidebar />
          <ProfileEdit/>
        </div>
      </div>
    </>
  );
}

export default EditProfilePage;
