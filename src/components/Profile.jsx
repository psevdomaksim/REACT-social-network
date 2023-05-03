import "../App.css";

import {
  Image,
  Spinner,
  Button,
  DropdownButton,
  Dropdown,
  Row,
  Container,
  Col,
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
import { goToDialogThunkCreator } from "../Store/ActionCreators/DialogsActionCreators";
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
import { EDIT_PROFILE_ROUTE } from "../utils/routes_consts";

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

  const fetchCurrentDialog = () => {
    if (currentLogin !== undefined) {
      store.dispatch(
        goToDialogThunkCreator(id, currentLogin.id, currentDialog)
      );
    }
  };

  const isUserFriend = () => {
    if (users != undefined && friends != undefined) {
      let isFriend = false;
      friends.find((friend) => {
        if (friend.secondUserId == currentLogin.id) {
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
  }, [id, currentLogin]);

  useEffect(() => {
    fetchFriends();
    fetchUsers();
  }, []);

  store.subscribe(() => {
    setUsers(store.getState().usersPage.users);
    setFriends(store.getState().friendsPage.friends);
    setOneFriendRequest(store.getState().friendReqsPage.oneFriendReq);
    setCurrentUser(store.getState().usersPage.currentUser);
    setCurrentLogin(store.getState().authPage.currentLogin);
    setCurrentDialog(store.getState().dialogsPage.currentDialog);
  });

  const fetchReq = () => {
    if (oneFriendRequest == undefined && currentLogin !== undefined) {
      fetchOneFriendReq(currentLogin.id, id);
      fetchOneFriendReq(id, currentLogin.id);
    }
  };

  fetchReq();

  const goToDialog = () => {
    fetchCurrentDialog();
  };
  const sendFriendRequest = () => {
    store.dispatch(sendFriendRequestsThunkCreator(+id, currentLogin.id));
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
    store.dispatch(deleteFriendThunkCreator(id, currentLogin.id));
  };

  return currentUser !== undefined &&
    currentLogin !== undefined &&
    currentDialog !== undefined ? (
    <>
      <main className="main">
        <Image
          rounded="true"
          width={"100%"}
          height={200}
          src={"http://localhost:4200/" + currentUser.data.ownerPageCover}
          className="owner-page-cover"
          href="/"
        />

        <div className="main-profile">
          {
            <Image
              rounded="true"
              width={100}
              height={100}
              src={"http://localhost:4200/" + currentUser.data.avatarImage}
              className="profile-avatar"
            />
          }
    <Container>
          <Row className="mt-1">
            <Col xs={4}>
              <h3>{currentUser.data.name}</h3>
            </Col>
            <Col xs={5}>
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
            </Col>

            {id == currentLogin.id ? (
              <Col xs={3}>
                <Link
                  className="sidebar-link"
                  to={EDIT_PROFILE_ROUTE + `/${id}`}
                >
                  <Button variant="outline-dark" size="sm">
                    Edit profile
                  </Button>
                </Link>
              </Col>
            ) : (
              <></>
            )}

            {id != currentLogin.id ? (
              <Col xs={3}>
                {isUserFriend() ? (
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
                ) : oneFriendRequest.requestSenderId == currentLogin.id ? (
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
                )}
              </Col>
            ) : (
              <></>
            )}
          </Row>

          <Row className="mt-1">
            <Col xs={12}>
              <Link className="sidebar-link" to={`/friends/${id}`}>
                Friends
              </Link>
            </Col>
          </Row>
         
          <Row className="mt-2">
            <Col xs={12}>
          {currentUser.data.dateOfBirth !== "" ? (
            <p>Data of birth: {currentUser.data.dateOfBirth}</p>
          ) : (
            <></>
          )}
              </Col>
          </Row>
          
          <Row className="mt-1">
            <Col xs={12}>
          {currentUser.data.city !== "" ? (
            <p>City: {currentUser.data.city}</p>
          ) : (
            <></>
          )}
            </Col>
          </Row>
          <Row className="mt-1">
            <Col xs={12}>
          {currentUser.data.education !== "" ? (
            <p>Education: {currentUser.data.education}</p>
          ) : (
            <></>
          )}
          </Col>
          </Row>


</Container>
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
