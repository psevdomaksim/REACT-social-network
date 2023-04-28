import "../App.css";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Profile from "../components/Profile";


function Home() {

  return (
    <>
      <Header />
      <div className="wrapper">
        <div className="content-wrapper">
          <Sidebar />
          <Profile/>
        </div>
      </div>
    </>
  );
}

export default Home;
