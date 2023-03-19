import '../App.css';
import './css/Sidebar.css'
import { Link } from "react-router-dom";

const Sidebar = ()=>{
    
    return(
      <>
      <sidebar className="sidebar">

        <div className="sidebar-item">
          <Link to="/">Profile</Link>
        </div>

        <div className="sidebar-item">
          <Link to="/dialogs">Messages</Link>
        </div>

        <div className="sidebar-item">News</div>
        <div className="sidebar-item">Music</div>
        
      </sidebar>
      
      </>       
    );

}

export default Sidebar;