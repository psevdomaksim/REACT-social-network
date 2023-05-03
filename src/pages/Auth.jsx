import React, { useContext, useEffect, useState } from "react";
import { Container, Form, Card, Button, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { StoreContext } from "../";
import Header from "../components/Header";
import {  loginThunkCreator, registrationThunkCreator } from "../Store/ActionCreators/AuthActionCreators";
import { LOGIN_ROUTE, PROFILE_ROUTE, REGISTRATION_ROUTE } from "../utils/routes_consts";

const Auth = () => {
  const store = useContext(StoreContext);
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("USER");


    const auth = () =>{
      if (isLogin) {
        store.dispatch(loginThunkCreator(username, password, role));
      } else{
        store.dispatch(registrationThunkCreator(username, name, password, role));
      }
    }
  
  return (
    <>
      <Header />
      <Container className="m-auto" style={{ weight: 720 }}>
        <Container
          className="d-flex justify-content-center align-items-center"
          style={{ height: window.innerHeight - 320 }}
        >
          <Card style={{ width: 720, border: "0" }} className="p-5">
            <h2 className="m-auto">
              {isLogin ? "Authorization" : "Registration"}
            </h2>
            <Form className="d-flex flex-column">

              {
                !isLogin ?    
                <Form.Control
                className="mt-4"
                placeholder="Enter your name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />:
              <></>

              }
              <Form.Control
                className="mt-4"
                placeholder="Enter login"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <Form.Control
                className="mt-4"
                placeholder="Enter password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

    

              <Row className="d-flex justify-content-between mt-3 pr-3 pl-3">
                {isLogin ? (
                  <div>
                    Don't have an account?
                    <Link to={REGISTRATION_ROUTE}>Sign up!</Link>
                  </div>
                ) : (
                  <div>
                    Have an account?<Link to={LOGIN_ROUTE}>Log in!</Link>
                  </div>
                )}
                
               {
                store.getState().authPage.currentLogin==null ?
                <Button
                className="mt-4 align-self-end"
                variant={"outline-success"}

                onClick={auth}
              >
                {isLogin ? "Sign in" : "Registration"}
              </Button>
              :
              <Link to={PROFILE_ROUTE+'/'+store.getState().authPage.currentLogin.id}>
              <Button
              className="mt-4 align-self-end"
              variant={"outline-success"}
            >
              Go to profile
            </Button>
            </Link>
               }
                
               
              </Row>
            </Form>
          </Card>
        </Container>
      </Container>
    </>
  );
};

export default Auth;
