import "../App.css";

import { Image, Form, Button } from "react-bootstrap";
import PostList from "./PostList";

const mainImage = require("../images/main-image.png");
const profileAvatar = require("../images/ava.jpg");

const DialogsContent = () => {
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
      
      </main>
    </>
  );
};

export default DialogsContent;
