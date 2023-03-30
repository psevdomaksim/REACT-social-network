import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Profile from "../components/Profile";

function Home() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content-wrapper">
        <Sidebar />
        <Profile />
      </div>
    </div>
  );
}

export default Home;
