import "../App.css";
import "./css/Sidebar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { StoreContext } from "..";
import { useState } from "react";

const Sidebar = () => {

  const store = useContext(StoreContext);

  const [login, setLogin] = useState();

  store.subscribe(() => {
    setLogin(store.getState().authPage.currentLogin);
  });

  return (
    <>
      <aside className="sidebar">
        <div className="sidebar-item">
          
         { login!==undefined ?
         <Link className="sidebar-link" to={`/profile/${login.id}`}>
            My profile
          </Link>:
          <></>
          }
        </div>

        <div className="sidebar-item">
          <Link className="sidebar-link" to="/dialogs">
            Messenger
          </Link>
        </div>

        <div className="sidebar-item">News</div>
        <div className="sidebar-item">Music</div>
        
        <div className="sidebar-item">
        { login!==undefined ?
          <Link className="sidebar-link" to={`/friends/${login.id}`}>
            Friends
          </Link>:
          <></>
          }
        </div>

        

      </aside>
    </>
  );
};

export default Sidebar;
