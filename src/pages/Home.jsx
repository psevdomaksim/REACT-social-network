import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeContent from "../components/HomeContent";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

function Feed() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content-wrapper">
        <Sidebar />
        <HomeContent />
      </div>
    </div>
  );
}

export default Feed;

