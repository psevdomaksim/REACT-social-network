import "../App.css";
import {
  Button,
  Col,
  Container,
  Dropdown,
  Form,
  Image,
  Modal,
  Row,
} from "react-bootstrap";
import { useState } from "react";
import { useParams } from "react-router";
import { StoreContext } from "..";
import { useContext } from "react";


const ProfileEdit = () => {
  const { id } = useParams();
  const store = useContext(StoreContext);

  const [currentLogin, setCurrentLogin] = useState();
  store.subscribe(() => {
     setCurrentLogin(store.getState().authPage.currentLogin);
   });

   console.log(store.getState().authPage.currentLogin)


  return  (
       <Container className="mt-3">

      <Row className="mt-3">
        <Col xs={12}>
 
          <Row>
            <Col xs={2} className="d-flex align-items-center">
            Name:
            </Col>
            <Col xs={8}>
              <Form.Control
                type="text"
                //value={name}
                //onChange={(e) => setName(e.target.value)}
              />
            </Col>
            <Col xs={2} className="d-flex align-items-center">           
                <b style={{ color: "red" }}>Enter name</b>             
            </Col>
          </Row>

          <Row>
            <Col xs={2} className="d-flex align-items-center">
            Status:
            </Col>
            <Col xs={8}>
              <Form.Control
                type="text"
                //value={name}
                //onChange={(e) => setName(e.target.value)}
              />
            </Col>
            <Col xs={2} className="d-flex align-items-center">           
                <b style={{ color: "red" }}>Enter status</b>             
            </Col>
          </Row>

          <Row>
            <Col xs={2} className="d-flex align-items-center">
            Date of birth:
            </Col>
            <Col xs={8}>
              <Form.Control
                type="text"
                //value={name}
                //onChange={(e) => setName(e.target.value)}
              />
            </Col>
            <Col xs={2} className="d-flex align-items-center">           
                <b style={{ color: "red" }}>Enter name</b>             
            </Col>
          </Row>

          <Row>
            <Col xs={2} className="d-flex align-items-center">
           City:
            </Col>
            <Col xs={8}>
              <Form.Control
                type="text"
                //value={name}
                //onChange={(e) => setName(e.target.value)}
              />
            </Col>
            <Col xs={2} className="d-flex align-items-center">           
                <b style={{ color: "red" }}>Enter name</b>             
            </Col>
          </Row>

          <Row>
            <Col xs={2} className="d-flex align-items-center">
           Education:
            </Col>
            <Col xs={8}>
              <Form.Control
                type="text"
                //value={name}
                //onChange={(e) => setName(e.target.value)}
              />
            </Col>
            <Col xs={2} className="d-flex align-items-center">           
                <b style={{ color: "red" }}>Enter name</b>             
            </Col>
          </Row>

          {/*Img*/}
          <Row className="mt-4">
            <Col
              xs={3}
              className="d-flex flex-column justify-content-center text-center"
            >
              Текущее изображение: <br />
              <Image
                style={{ margin: "0 auto", marginTop: 15 }}
                width={150}
                //src={ "http://localhost:4200/" + productCurr.img}
              />
            </Col>
            {/* {img && (
              <Col
                xs={6}
                className="d-flex flex-column justify-content-center text-center"
              >
                Новое: <br />
                <Image
                  style={{ margin: "0 auto", marginTop: 15 }}
                  width={150}
                 // src={img}
                />
              </Col>
            )} */}
            <Col xs={3} className="d-flex align-items-center">
              <Form.Control
                className="mt-4 mb-2"
                type="file"
               // onChange={imgHandler}
              />
            </Col>
          </Row>


          <Row className="mt-5">
            <Col xs={2}>
              {/* {isDisabledPutBtn ? (
                <Button disabled>Обновить</Button>
              ) : (
                <Button onClick={putProduct}>Обновить</Button>
              )} */}
              {/*  <Button className="ml-5" variant="danger" onClick={handleShow}>Delete product</Button> */}
            </Col>
            <Col xs={10}>
            {/* {showMsg && <Row>{msg}</Row>} */}
            </Col>
           
          </Row>
        </Col>
      </Row>
    </Container>
      
  );
};

export default ProfileEdit;
