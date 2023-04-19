import "../App.css";

import { Image, Spinner, Button } from "react-bootstrap";
import PostList from "./Posts/PostList";
import { useContext } from "react";
import { StoreContext } from "..";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import {
  fetchCurrentLoginThunkCreator,
  fetchOneUserThunkCreator,
  fetchUsersThunkCreator,
} from "../Store/ActionCreators/UsersActionCreators";
import { useRef } from "react";
import { fetchDialogsThunkCreator, fetchOneDialogThunkCreator } from "../Store/ActionCreators/DialogsActionCreators";


const Profile = () => {
  const { id } = useParams();

  const store = useContext(StoreContext);

  const [users, setUsers] = useState();
  const [currentDialog, setCurrentDialog] = useState();
  const [currentUser, setCurrentUser] = useState();
  const [currentLogin, setCurrentLogin] = useState();

  const trigger = useRef(null);


  const fetchUsers = () => {
    store.dispatch(fetchUsersThunkCreator());
  };

  const fetchOneUser = (id) => {
    store.dispatch(fetchOneUserThunkCreator(id));
  };

  const fetchCurrentLogin = () => {
    store.dispatch(fetchCurrentLoginThunkCreator());
  };

 const fetchCurrentDialog = () => {
    store.dispatch(fetchOneDialogThunkCreator(id));
  };



  useEffect(() => {
    fetchOneUser(id);
  }, [id, users]);

  useEffect(() => {
    fetchUsers();
    fetchCurrentLogin();
    fetchCurrentDialog();
  }, []);

  store.subscribe(() => {
    setUsers(store.getState().usersPage.users);
    setCurrentUser(store.getState().usersPage.currentUser);
    setCurrentLogin(store.getState().usersPage.currentLogin);
    setCurrentDialog(store.getState().dialogsPage.currentDialog);
  });


  const goToDialog = () => {
    console.log(currentDialog)
  }


  const isEmpty = () => {
    if (currentUser !== undefined && currentLogin !== undefined ) {
      return Object.keys(currentLogin).length === 0 && Object.keys(currentUser).length === 0;
    }
  };



  return !isEmpty() && currentUser !== undefined && currentLogin !== undefined ? (
    <>
      <main className="main">
        <Image
          width={"100%"}
          height={200}
          src={require("../assets/images/" + currentUser.data.ownerPageCover)}
          className="owner-page-cover"
          href="/"
        />

        <div className="main-profile">
          {
            <Image
              width={100}
              height={100}
              src={require("../assets/images/" + currentUser.data.avatarImage)}
              className="profile-avatar"
              href="/"
            />
          }

          <div className="profile-data">
            <div className="profile-header">
            <h3>{currentUser.data.name}</h3>
            <Button variant="outline-secondary" onClick={goToDialog}>Send message</Button>
            </div>
        
            <Link className="sidebar-link" to={`/friends/${id}`}>
              <p>Friends</p>       
            </Link>
            {currentUser.data.dateOfBirth !== "" ? <p>Data of birth: {currentUser.data.dateOfBirth}</p> : <></>}
            {currentUser.data.city !== "" ? <p>City: {currentUser.data.city}</p> : <></>}
            {currentUser.data.education !== "" ? <p>Education: {currentUser.data.education}</p> : <></>}
          
          </div>
       
        </div>

        <div className="postList">
          <PostList trigger={trigger} login={currentLogin} user={currentUser} />
        </div>
        <div ref={trigger} className="trigger"></div>
      </main>
    </>
  ) : (
    <Spinner className="spinner" animation="border" variant="secondary" />
  );
};

export default Profile;
