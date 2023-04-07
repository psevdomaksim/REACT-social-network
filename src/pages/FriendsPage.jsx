import { Link } from "react-router-dom";
import "../App.css";
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
          <FriendList />
        </div>
      </div>
    </>
  );
};

export default FriendsPage;
