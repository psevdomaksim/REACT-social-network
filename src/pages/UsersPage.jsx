import "../App.css";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import UserList from "../components/Users/UserList";

const UserPage = () => {
  return (   
    <>
     <Header />
      <div className="wrapper">
       
        <div className="content-wrapper">
          <Sidebar />
          <UserList/>
        </div>
      </div>
    </>
  );
};

export default UserPage;
