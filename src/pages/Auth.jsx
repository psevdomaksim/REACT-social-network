import React, { useContext, useEffect, useState } from "react";
import {Container, Form, Card, Button, Row} from "react-bootstrap"
import { Link, useLocation } from "react-router-dom";
import { StoreContext } from "../";
import Header from "../components/Header";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/routes_consts";


 
const Auth = () => {
    const store = useContext(StoreContext)
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');



    // const auth = async ()=>{           
    //  try {      
    //     let data;
    //     if (isLogin){
    //         data = await login(email, password);
    //     }
    //     else{
    //         data = await registration(email, password, role);
            
    //     }
    //         user.setIsAuth(true)
    //         user.setRole(localStorage.getItem("role"))
    //         history.push(SHOP_ROUTE)
    //         localStorage.setItem("auth", "true")
            
    //   } catch(e){
    //       alert(e.response.data.message)
    //   } 
        
    // }

    return(
        <>
        <Header />
        <Container  className="m-auto" style={{weight: 720}}>
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 320}}
       >
          
           <Card style={{width: 720, border:"0"}} className="p-5">
               <h2 className="m-auto">{isLogin ? 'Authorization' : "Registration"}</h2>
               <Form className="d-flex flex-column">
               
                   <Form.Control
                       className="mt-4"
                       placeholder="Enter username"
                    
                       type="text"
                       value = {email}
                    
                       onChange={e => setEmail(e.target.value)}
                    />
           
                     <Form.Control
                       className="mt-4"
                       placeholder="Enter password"
                       type = "password"
                       value = {password}                  
                       onChange={e => setPassword(e.target.value)}
                       
                    />
                  
                    <Row className="d-flex justify-content-between mt-3 pr-3 pl-3">
                        {isLogin ?
                            <div>
                               Don't have an account?<Link to={REGISTRATION_ROUTE}>Register!</Link>
                            </div>
                            :
                            <div>
                                
                                Have an account?<Link to={LOGIN_ROUTE}>Log in!</Link> 
                            </div>
                        }
                        <Button
                            className="mt-4 align-self-end"
                            variant={"outline-success"}
                        
                            //onClick={auth}
                        >
                            {isLogin ? "Sign in" : "Registration"}
                        </Button>
                        
                    </Row>
              
                  
                </Form>
           </Card>

       </Container>
       </Container>
       </>
    );
}

export default Auth;