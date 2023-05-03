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
import { Navigate, useParams } from "react-router";
import { StoreContext } from "..";
import { useContext } from "react";
import { updateProfileDataThunkCreator } from "../Store/ActionCreators/AuthActionCreators";
import { Link } from "react-router-dom";
import { PROFILE_ROUTE } from "../utils/routes_consts";

const ProfileEdit = () => {
  const { id } = useParams();
  const store = useContext(StoreContext);
  const [login, setLogin] = useState(store.getState().authPage.currentLogin);
  const [name, setName] = useState(
    store.getState().authPage.currentLogin.data.name
  );
  const [status, setStatus] = useState(
    store.getState().authPage.currentLogin.data.status
  );
  const [birthData, setBirthData] = useState(
    store.getState().authPage.currentLogin.data.dateOfBirth
  );
  const [city, setCity] = useState(
    store.getState().authPage.currentLogin.data.city
  );
  const [education, setEducation] = useState(
    store.getState().authPage.currentLogin.data.education
  );
  const [avatarImage, setAvatarImage] = useState(
    store.getState().authPage.currentLogin.data.avatarImage
  );
  const [pageCoverImage, setPageCoverImage] = useState(
    store.getState().authPage.currentLogin.data.ownerPageCover
  );
  const [avatarImageFile, setAvatarImageFile] = useState(null);

  const [showMsg, setShowMsg] = useState(false);
  const [msg, setMsg] = useState("");
  const [isDisabledPutBtn, setIsDisabledPutBt] = useState(false);

  store.subscribe(() => {
    setLogin(store.getState().authPage.currentLogin);
  });

  // const imgHandler = (e) => {
  //   e.preventDefault();

  //   const reader = new FileReader();
  //   reader.onload = () => {
  //     setAvatarImage(reader.result);
  //   };
  //   reader.readAsDataURL(e.target.files[0]);
  //   setAvatarImageFile(e.target.files[0]);
  // };

  const updateProfileData = () => {
    if (name == "") {
      setShowMsg(true);
      setMsg("Name shouldn't be empty");
      return msg;
    }

    if (name.length < 4) {
      setShowMsg(true);
      setMsg(`Name ${name} is too short`);
      return msg;
    }

    // const formData = new FormData();
    // formData.append("name", name);
    // formData.append("status", status);
    // formData.append("avatarImage", avatarImageFile);
    // formData.append("ownerPageCover", "default-image.jpg");
    // formData.append("dateOfBirth", birthDate);
    // formData.append("city", city);
    // formData.append("education", education);

    let updatedUserData = {
      name: name,
      status: status,
      avatarImage: avatarImage,
      ownerPageCover: pageCoverImage,
      dateOfBirth: birthData,
      city: city,
      education: education,
    };

    setIsDisabledPutBt(true);
    setShowMsg(true);
    setMsg("Profile have been updated");

    store.dispatch(
      updateProfileDataThunkCreator(
        store.getState().authPage.currentLogin,
        updatedUserData
      )
    );
  };

  const onChange = (event) => {
    setIsDisabledPutBt(false);
    setShowMsg(false);

    if (event.target.id == "name") {
      setName(event.target.value);
    } 
    else if (event.target.id == "status") {
      setStatus(event.target.value);
    }
    else if (event.target.id == "birth-data") {
      setBirthData(event.target.value);
    }
    else if (event.target.id == "city") {
      setCity(event.target.value);
    }
    else if (event.target.id == "education") {
      setEducation(event.target.value);
    }
  };


  if (id != login.id) {
    return <Navigate to={PROFILE_ROUTE + `/${login.id}`} />;
  }

  return (
    <Container className="mt-3">
      <Link className="link" to={`/profile/${id}`}>
        <div className="user-info">
          <Image
            width={50}
            height={50}
            src={
              "http://localhost:4200/" +
              store.getState().authPage.currentLogin.data.avatarImage
            }
            className="preview-image"
            href="/"
          />
          <h3>{login.data.name}</h3>
        </div>
      </Link>

      <Row className="mt-3">
        <Col xs={12}>
          <Row className="mt-3">
            <Col xs={2} className="d-flex align-items-center">
              Name:
            </Col>
            <Col xs={8}>
              <Form.Control
                type="text"
                id="name"
                value={name}
                onChange={onChange}
              />
            </Col>
            {name === "" ? (
              <Col xs={2} className="d-flex align-items-center">
                <b style={{ color: "red" }}>Enter name</b>
              </Col>
            ) : (
              <></>
            )}
          </Row>

          <Row className="mt-3">
            <Col xs={2} className="d-flex align-items-center">
              Status:
            </Col>
            <Col xs={8}>
              <Form.Control
                type="text"
                id="status"
                value={status}
                onChange={onChange}
              />
            </Col>
          </Row>

          <Row className="mt-3">
            <Col xs={2} className="d-flex align-items-center">
              Date of birth:
            </Col>
            <Col xs={8}>
              <Form.Control
                type="text"
                id="birth-data"
                value={birthData}
                onChange={onChange}
              />
            </Col>
          </Row>

          <Row className="mt-3">
            <Col xs={2} className="d-flex align-items-center">
              City:
            </Col>
            <Col xs={8}>
              <Form.Control
                type="text"
                id="city"
                value={city}
                onChange={onChange}
              />
            </Col>
          </Row>

          <Row className="mt-3">
            <Col xs={2} className="d-flex align-items-center">
              Education:
            </Col>
            <Col xs={8}>
              <Form.Control
                type="text"
                id="education"
                value={education}
                onChange={onChange}
              />
            </Col>
          </Row>

          <Row className="mt-5">
            <Col xs={2}>
              {isDisabledPutBtn ? (
                <Button disabled>Update</Button>
              ) : (
                <Button onClick={updateProfileData}>Update</Button>
              )}
            </Col>
            <Col xs={10}>
              {showMsg && (
                <Row>
                  <h5>{msg}</h5>
                </Row>
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfileEdit;
