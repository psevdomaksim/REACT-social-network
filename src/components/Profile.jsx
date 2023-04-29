import "../App.css";

import {
  Image,
  Spinner,
  Button,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import PostList from "./Posts/PostList";
import { useContext } from "react";
import { StoreContext } from "..";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import {
  fetchOneUserThunkCreator,
  fetchUsersThunkCreator,
} from "../Store/ActionCreators/UsersActionCreators";
import { useRef } from "react";
import {
  goToDialogThunkCreator,
} from "../Store/ActionCreators/DialogsActionCreators";
import { FaUserFriends, FaUserAltSlash, FaUserCheck } from "react-icons/fa";
import {
  addFriendThunkCreator,
  deleteFriendThunkCreator,
  fetchFriendsThunkCreator,
} from "../Store/ActionCreators/FriendsActionCreators";

import {
  deleteFriendRequestThunkCreator,
  fetchOneFriendReqThunkCreator,
  rejectFriendRequestThunkCreator,
  sendFriendRequestsThunkCreator,
} from "../Store/ActionCreators/FriendReqsActionCreators";
import { fetchCurrentLoginThunkCreator } from "../Store/ActionCreators/AuthActionCreators";

const Profile = () => {
  const { id } = useParams();

  const store = useContext(StoreContext);

  const [users, setUsers] = useState();
  const [friends, setFriends] = useState();

  const [oneFriendRequest, setOneFriendRequest] = useState();

  const [currentDialog, setCurrentDialog] = useState();
  const [currentUser, setCurrentUser] = useState();
  const [currentLogin, setCurrentLogin] = useState();

  const trigger = useRef(null);

  const fetchUsers = () => {
    store.dispatch(fetchUsersThunkCreator());
  };

  const fetchFriends = () => {
    store.dispatch(fetchFriendsThunkCreator(id));
  };

  const fetchOneFriendReq = (userId, senderReqId) => {
    store.dispatch(fetchOneFriendReqThunkCreator(userId, senderReqId));
  };

  const fetchOneUser = () => {
    store.dispatch(fetchOneUserThunkCreator(id));
  };

  const fetchCurrentLogin = () => {
    store.dispatch(fetchCurrentLoginThunkCreator());
  };

  const fetchCurrentDialog = () => {
    store.dispatch(goToDialogThunkCreator(id));
  };

  const isUserFriend = () => {
    if (users != undefined && friends != undefined) {
      let isFriend = false;
      friends.find((friend) => {
        if (friend.secondUserId == 69) {
          isFriend = true;
        }
      });
      return isFriend;
    }
  };

  useEffect(() => {
    isUserFriend();
    fetchOneUser();
    setOneFriendRequest();
    fetchCurrentDialog();
  }, [id]);

  useEffect(() => {
    fetchFriends();
    fetchUsers();
    fetchCurrentLogin();
  }, []);

  store.subscribe(() => {
    setUsers(store.getState().usersPage.users);
    setFriends(store.getState().friendsPage.friends);
    setOneFriendRequest(store.getState().friendReqsPage.oneFriendReq);
    setCurrentUser(store.getState().usersPage.currentUser);
    setCurrentLogin(store.getState().auth.currentLogin);
    setCurrentDialog(store.getState().dialogsPage.currentDialog);
  });

  const fetchReq = () => {
    if (oneFriendRequest == undefined) {
      fetchOneFriendReq(69, id);
      fetchOneFriendReq(id, 69);
    }
  };

  fetchReq();

  const goToDialog = () => {
    fetchCurrentDialog();
  };
  const sendFriendRequest = () => {
    store.dispatch(sendFriendRequestsThunkCreator(+id, 69));
  };

  const acceptFriendRequest = () => {
    store.dispatch(addFriendThunkCreator(oneFriendRequest));
  };

  const rejectFriendRequest = () => {
    store.dispatch(rejectFriendRequestThunkCreator(oneFriendRequest));
  };

  const deleteFriendRequest = () => {
    store.dispatch(deleteFriendRequestThunkCreator(oneFriendRequest));
  };

  const deleteFriend = () => {
    store.dispatch(deleteFriendThunkCreator(id, 69));
  };

  const isEmpty = () => {
    if (currentUser !== undefined && currentLogin !== undefined) {
      return (
        Object.keys(currentLogin).length === 0 &&
        Object.keys(currentUser).length === 0
      );
    }
  };

  return !isEmpty() &&
    currentUser !== undefined &&
    currentLogin !== undefined ? (
    <>
      <main className="main">
        <Image
          rounded="true"
          width={"100%"}
          height={200}
          src={require("../assets/images/" + currentUser.data.ownerPageCover)}
          className="owner-page-cover"
          href="/"
        />

        <div className="main-profile">
          {
            <Image
              rounded="true"
              width={100}
              height={100}
              src={require("../assets/images/" + currentUser.data.avatarImage)}
              className="profile-avatar"
            />
          }

          <div className="profile-data">
            <div className="profile-header">
              <h3>{currentUser.data.name}</h3>
              <Link
                className="sidebar-link"
                to={`/dialogs/${currentDialog.id}`}
              >
                <Button
                  variant="outline-secondary"
                  size="sm"
                  onClick={goToDialog}
                >
                  Send message
                </Button>
              </Link>
              {id != 69 ? (
                isUserFriend() ? (
                  <DropdownButton
                    id="dropdown-basic-button"
                    title={<FaUserFriends size={20} />}
                    variant="outline-secondary"
                    size="sm"
                  >
                    <Dropdown.Item onClick={deleteFriend}>
                      <FaUserAltSlash
                        size={20}
                        style={{ marginRight: "5px" }}
                      />
                      <span>Unfriend</span>
                    </Dropdown.Item>
                  </DropdownButton>
                ) : oneFriendRequest == undefined ? (
                  <DropdownButton
                    id="dropdown-basic-button"
                    title={<FaUserFriends size={20} />}
                    variant="outline-secondary"
                    size="sm"
                  >
                    <Dropdown.Item onClick={sendFriendRequest}>
                      <FaUserCheck size={20} style={{ marginRight: "5px" }} />
                      <span>Send friend request</span>
                    </Dropdown.Item>
                  </DropdownButton>
                ) : oneFriendRequest.requestSenderId == id ? (
                  <DropdownButton
                    id="dropdown-basic-button"
                    title={<FaUserFriends size={20} />}
                    variant="outline-secondary"
                    size="sm"
                  >
                    <Dropdown.Item onClick={acceptFriendRequest}>
                      <FaUserCheck size={20} style={{ marginRight: "5px" }} />
                      <span>Add friend</span>
                    </Dropdown.Item>
                    <Dropdown.Item onClick={rejectFriendRequest}>
                      <FaUserAltSlash
                        size={20}
                        style={{ marginRight: "5px" }}
                      />
                      <span>Decline request</span>
                    </Dropdown.Item>
                  </DropdownButton>
                ) : oneFriendRequest.requestSenderId == 69 ? (
                  <DropdownButton
                    id="dropdown-basic-button"
                    title={<FaUserFriends size={20} />}
                    variant="outline-secondary"
                    size="sm"
                  >
                    <Dropdown.Item onClick={deleteFriendRequest}>
                      <FaUserAltSlash
                        size={20}
                        style={{ marginRight: "5px" }}
                      />
                      <span>Cancel request</span>
                    </Dropdown.Item>
                  </DropdownButton>
                ) : (
                  <></>
                )
              ) : (
                <></>
              )}
            </div>

           
              <span>
              <Link className="sidebar-link" to={`/friends/${id}`}>
                Friends
                </Link>
                </span>
            
            {currentUser.data.dateOfBirth !== "" ? (
              <p>Data of birth: {currentUser.data.dateOfBirth}</p>
            ) : (
              <></>
            )}
            {currentUser.data.city !== "" ? (
              <p>City: {currentUser.data.city}</p>
            ) : (
              <></>
            )}
            {currentUser.data.education !== "" ? (
              <p>Education: {currentUser.data.education}</p>
            ) : (
              <></>
            )}
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
