import "../App.css";

import { Image, Form, Button } from "react-bootstrap";
import PostList from "./Posts/PostList";
import { useContext } from "react";
import { StoreContext } from "..";
import { useParams } from "react-router";

const Profile = () => {

const {id} = useParams();

const store = useContext(StoreContext);

let state = store.getState();

const fetchOneUser = () => {
  let user;

  state.usersPage.users.find((u) =>  
   {
     u.id == id ? (user = u) : <></>
  }
  );
  return user;
};

  let currentUser = fetchOneUser()

  return (
    <>
       <main className="main">
  
        <Image
          width={"100%"}
          height={200}
          src={currentUser.data.ownerPageCover}
          className="owner-page-cover"
          href="/"
        />

        <div className="main-profile">
          <Image
            width={100}
            height={100}
            src={currentUser.data.avatarImage}
            className="profile-avatar"
            href="/"
          />

          <div className="profile-data">
            <h3>{currentUser.data.name}</h3>
            <p>{currentUser.data.status}</p>
            <p>Data of birth: {currentUser.data.dateOfBirth}</p>
            <p>City: {currentUser.data.city}</p>
            <p>Education: {currentUser.data.education}</p>
          </div>
        </div>
      <PostList/>
      </main>
    </>
  );
};

export default Profile;
