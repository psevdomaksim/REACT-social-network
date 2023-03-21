import "../App.css";

import { Image, Form, Button } from "react-bootstrap";
import PostList from "./Posts/PostList";

const mainImage = require("../images/main-image.png");
const profileAvatar = require("../images/ava.jpg");

const HomeContent = () => {
  return (
    <>
      <main className="main">
        <Image
          width={"100%"}
          height={200}
          src={mainImage}
          className="main-image"
          href="/"
        />

        <div className="main-profile">
          <Image
            width={100}
            height={100}
            src={profileAvatar}
            className="profile-avatar"
            href="/"
          />

          <div className="profile-data">
            <h3>Name</h3>
            <p>Data of birth:</p>
            <p>City:</p>
            <p>Education:</p>
          </div>
        </div>
      <PostList/>
      
      </main>
    </>
  );
};

export default HomeContent;
