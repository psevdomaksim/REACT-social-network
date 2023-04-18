import "../App.css";

import { Image, Spinner } from "react-bootstrap";
import PostList from "./Posts/PostList";
import { useContext } from "react";
import { StoreContext } from "..";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { fetchOneUserThunkCreator, fetchUsersThunkCreator } from "../Store/ActionCreators/UsersActionCreators";
import { useRef } from "react";

const Profile = () => {
  const { id } = useParams();

  const store = useContext(StoreContext);

  const [users, setUsers] = useState();
  const [currentUser, setCurrentUser] = useState();


  const trigger = useRef(null);    

 


  const isEmpty = () => {
    if (currentUser!== undefined) {
      return Object.keys(currentUser).length === 0;
    }
  }


  const fetchUsers = () => {
    store.dispatch(fetchUsersThunkCreator());
  };


  const fetchOneUser = (id) => {
    store.dispatch(fetchOneUserThunkCreator(id));
  };


  useEffect(() => {
    fetchOneUser(id);
  }, [id,users]);


  useEffect(() => {
    fetchUsers();
  }, []);


  store.subscribe(() => {
    setUsers(store.getState().usersPage.users)
    setCurrentUser(store.getState().usersPage.currentUser)
  });

  return !isEmpty() && currentUser !== undefined ? (
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
          <Image
            width={100}
            height={100}
            src={require("../assets/images/" + currentUser.data.avatarImage)}
            className="profile-avatar"
            href="/"
          />

          <div className="profile-data">
            <h3>{currentUser.data.name}</h3>
            <Link className="sidebar-link" to={`/friends/${id}`}>
              <p>Friends</p>
            </Link>
            <p>Data of birth: {currentUser.data.dateOfBirth}</p>
            <p>City: {currentUser.data.city}</p>
            <p>Education: {currentUser.data.education}</p>
          </div>
        </div>
       
        <div className="postList">
          <PostList trigger={trigger} user={currentUser}/>
        </div>
          <div ref={trigger} className="trigger"></div>
      </main>
     
    </>
  ) : (
    <Spinner className="spinner" animation="border" variant="secondary" />
    
  );
};

export default Profile;
