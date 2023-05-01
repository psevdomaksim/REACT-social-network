import "../App.css";
import "./css/Header.css";
import { Navbar, Container, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { StoreContext } from "..";
import { LOGIN_ROUTE } from "../utils/routes_consts";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { useState } from "react";
import { logoutActionCreator } from "../Store/ActionCreators/AuthActionCreators";

const logo = require("../assets/images/logo.png");

const Header = () => {
  const store = useContext(StoreContext);

    const logout = (()=>{
      store.dispatch(logoutActionCreator())
    })

  return (
    <>
      <Navbar className="header">
        <Container>
          <Link to="/">
            <Image src={logo} className="logo" href="/" />
          </Link>

          {store.getState().authPage.isAuth ? (
             <Link to={LOGIN_ROUTE}>
              <Button variant={"outline-light"} size="sm" onClick={logout}>
                <FiLogOut size={18} style={{ marginRight: "5px" }} />
                Log out
              </Button>   
              </Link>  
          ) : (
            <Link to={LOGIN_ROUTE}>
              <Button variant={"outline-light"} size="sm">
              <FiLogIn size={18} style={{ marginRight: "5px" }} />
                Log in
              </Button>
            </Link>
          )}
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
