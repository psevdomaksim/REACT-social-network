import "../App.css";
import "./css/Sidebar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { StoreContext } from "..";


const Sidebar = () => {

  const store = useContext(StoreContext);

  return (
    <>
      <aside className="sidebar">
        <div className="sidebar-item">
          
       
         <Link className="sidebar-link" to={`/profile/${store.getState().authPage.currentLogin.id}`}>
            My profile
          </Link>
          <></>
          
        </div>

        <div className="sidebar-item">
          <Link className="sidebar-link" to="/dialogs">
            Messenger
          </Link>
        </div>
        
        <div className="sidebar-item">
        
          <Link className="sidebar-link" to={`/friends/${store.getState().authPage.currentLogin.id}`}>
            Friends
          </Link>
          <></>
          
        </div>

        

      </aside>
    </>
  );
};

export default Sidebar;
