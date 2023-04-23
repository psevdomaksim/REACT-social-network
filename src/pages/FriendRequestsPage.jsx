import "../App.css";
import FriendRequestList from "../components/FriendRequests/FriendRequestsList";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const FriendRequestsPage = () => {
  return (
    <>
      <Header />
      <div className="wrapper">
        <div className="content-wrapper">
          <Sidebar />
          <div className="friendList">      
            <FriendRequestList/>
          </div>
        </div>
      </div>
    </>
  );
};

export default FriendRequestsPage;
