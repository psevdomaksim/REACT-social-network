import "../App.css";
import "./css/Header.css";
import { Navbar, Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const logo = require("../images/ava.jpg");

const Header = () => {
  return (
    <>
      <Navbar className="header">
        <Container>
          <Link to="/">
            <Image src={logo} className="logo" href="/" />
          </Link>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
