import '../App.css';
import './css/Header.css'
import { Navbar, Container, Image} from "react-bootstrap";

const logo = require("../images/ava.jpg");

const Header = ()=>{
    
    return(
      <>
      <Navbar className="header">
        <Container>      
          <Image
          src={logo}
          className="logo"
          href="/"
        />     
        </Container>
      </Navbar>
      
      </>       
    );

}

export default Header;