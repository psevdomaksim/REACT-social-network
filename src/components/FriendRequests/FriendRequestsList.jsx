import "../css/Users.css";
import { Form, Image, Spinner } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { StoreContext } from "../..";
import Friend from "./FriendRequest";
import { useState } from "react";
import { useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import {
  fetchOneUserThunkCreator,
  fetchUsersThunkCreator,
} from "../../Store/ActionCreators/UsersActionCreators";
import {
  acceptFriendRequestThunkCreator,
  deleteFriendThunkCreator,
  fetchFriendRequestsThunkCreator,
  fetchFriendsThunkCreator,
} from "../../Store/ActionCreators/FriendsActionCreators";
import FriendRequest from "./FriendRequest";

const FriendRequestList = () => {
  const { id } = useParams();

  const [friendRequests, setFriendRequests] = useState();
  const [users, setUsers] = useState();
  const [currentUser, setCurrentUser] = useState();
  const [filter, setFilter] = useState(friendRequests);
  const store = useContext(StoreContext);

  const fetchFriendRequests = () => {
    store.dispatch(fetchFriendRequestsThunkCreator(id));
  };

  const fetchUsers = () => {
    store.dispatch(fetchUsersThunkCreator());
  };

  const fetchOneUser = () => {
    store.dispatch(fetchOneUserThunkCreator(id));
  };

  useEffect(() => {
    fetchFriendRequests();
    fetchUsers();
  }, []);

  useEffect(() => {
    fetchOneUser();
  }, [id]);

  store.subscribe(() => {
    setFriendRequests(store.getState().friendsPage.friendRequests);
    setUsers(store.getState().usersPage.users);
    setCurrentUser(store.getState().usersPage.currentUser);
  });

  const acceptFriendRequest = (userId, requestSenderId) => {
    store.dispatch(acceptFriendRequestThunkCreator(userId, requestSenderId));
  };

  const rejectFriendRequest = (userId, requestSenderId) => {
    console.log("reject")
    //  store.dispatch(deleteFriendThunkCreator(id, friendId));
    };


  const isEmpty = () => {
    if (currentUser !== undefined) {
      return Object.keys(currentUser).length === 0;
    }
  };

  useEffect(() => {
    setFilter(users);
  }, [users]);

 



  return !isEmpty() && currentUser !== undefined ? (
    <>
      <div className="users-wrapper">
      <Link className="link" to={`/${id}`}>
          <div className="user-info">
            <Image
              width={50}
              height={50}
              src={require("../../assets/images/" +
                currentUser.data.avatarImage)}
              className="preview-image"
              href="/"
            />
            <h3>{currentUser.data.name}</h3>
          </div>
        </Link>
        <div className="friendlist-header">
          <div className="user-info">
         <h3 className="friends-header"> Friend Request</h3>
         
         <Link className="link" to={`/friends/${id}`}>
            <h4> Friends</h4>
          </Link>
        </div>
        </div>
        

        {friendRequests.length !== 0 ? (
          users.map((user) =>
          friendRequests.map((friendRequest) =>
          friendRequest.requestSenderId == user.id ? (
                <FriendRequest
                  key={user.id}
                  userId={+id}
                  acceptFriendRequest={acceptFriendRequest}
                  rejectFriendRequest={rejectFriendRequest}
                  requestSenderId={user.id}
                  user={user.data}
                ></FriendRequest>
              ) : (
                <></>
              )
            )
          )
        ) : (
          <h2 className="no-friends">No friend requsts found</h2>
        )}
      </div>
    </>
  ) : (
    <Spinner className="spinner" animation="border" variant="secondary" />
  );
};

export default FriendRequestList;
