import "../App.css";

import { Image, Spinner } from "react-bootstrap";
import PostList from "./Posts/PostList";
import { useContext } from "react";
import { StoreContext } from "..";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { fetchUsersActionCreator } from "../Store/ActionCreators/UsersActionCreators";

const Profile = () => {
  const { id } = useParams();

  const store = useContext(StoreContext);

  let state = store.getState();

  const [users, setUsers] = useState();

  const fetchUsers = async () => {
    fetchUsersActionCreator().then((data) => {
      store.dispatch(data);
      state = store.getState();
      setUsers(state.usersPage.users);
    });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    fetchOneUser();
  }, [id,users]);

  const fetchOneUser = async () => {
    users.find((u) => {
      u.id == id ? setCurrentUser(u) : <></>;
    });
  };

  return currentUser !== undefined ? (
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
        <PostList />
      </main>
    </>
  ) : (
    <Spinner className="spinner" animation="border" variant="secondary" />
  );
};

export default Profile;
