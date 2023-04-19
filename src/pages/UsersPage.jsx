import { useRef } from "react";
import "../App.css";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import UserList from "../components/Users/UserList";

const UserPage = () => {
  const trigger = useRef(null);

  return (   
    <>
     <Header />
      <div className="wrapper">
       
        <div className="content-wrapper">
          <Sidebar />
          <UserList trigger={trigger}/>
        
        </div>
        <div ref={trigger} className="trigger"></div>
      </div>
    </>
  );
};

export default UserPage;
