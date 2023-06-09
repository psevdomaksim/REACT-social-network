import { Link } from "react-router-dom";
import "../App.css";
import FriendRequestList from "../components/FriendRequests/FriendRequestsList";
import FriendList from "../components/Friends/FriendList";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const FriendsPage = () => {
  return (
    <>
      <Header />
      <div className="wrapper">
        <div className="content-wrapper">
          <Sidebar />
          <div className="friendList">      
            <FriendList />
          </div>
        </div>
      </div>
    </>
  );
};

export default FriendsPage;
