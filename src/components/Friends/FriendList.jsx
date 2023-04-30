import "../css/Users.css";
import { Form, Image, Spinner } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { StoreContext } from "../..";
import Friend from "./Friend";
import { useState } from "react";
import { useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import {
  fetchOneUserThunkCreator,
  fetchUsersThunkCreator,
} from "../../Store/ActionCreators/UsersActionCreators";
import {
  deleteFriendThunkCreator,
  fetchFriendsThunkCreator,
} from "../../Store/ActionCreators/FriendsActionCreators";

const FriendList = () => {
  const { id } = useParams();

  const [friends, setFriends] = useState();
  const [users, setUsers] = useState();
  const [currentUser, setCurrentUser] = useState();
  const [filter, setFilter] = useState(friends);
  const [login, setLogin] = useState();
  const store = useContext(StoreContext);

  const fetchFriends = () => {
    store.dispatch(fetchFriendsThunkCreator(id));
  };

  const fetchUsers = () => {
    store.dispatch(fetchUsersThunkCreator());
  };

  const fetchOneUser = () => {
    store.dispatch(fetchOneUserThunkCreator(id));
  };

  useEffect(() => {
    fetchOneUser();
    fetchFriends();
    fetchUsers();
  }, [id]);

  store.subscribe(() => {
    setFriends(store.getState().friendsPage.friends);
    setUsers(store.getState().usersPage.users);
    setCurrentUser(store.getState().usersPage.currentUser);
    setLogin(store.getState().authPage.currentLogin);
  });

  const deleteFriend = (id, friendId) => {
    store.dispatch(deleteFriendThunkCreator(id, friendId));
  };

  const isEmpty = () => {
    if (currentUser !== undefined) {
      return Object.keys(currentUser).length === 0;
    }
  };

  useEffect(() => {
    setFilter(users);
  }, [users]);

  const getSearch = () => {
    if (filter) {
      return filter;
    }
    return users;
  };

  const userSearch = getSearch();

  const onChange = (event) => {
    setFilter(
      users.filter((user) => {
        return user.data.name
          .toLowerCase()
          .includes(event.target.value.toLowerCase());
      })
    );
  };

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
            <h3 className="friends-header"> Friends</h3>
            {id == login.id ? (
              <Link className="link" to={`/friendRequests/${id}`}>
                <h4> Friend Requests</h4>
              </Link>
            ) : (
              <></>
            )}
          </div>

          <Link className="link" to="/users">
            <h3> All users</h3>
          </Link>
        </div>

        <Form className="userlist-form">
          <BiSearch size={30}></BiSearch>
          <Form.Control
            type="text"
            placeholder="Find friend"
            onChange={onChange}
          />
        </Form>

        {friends.length !== 0 ? (
          users &&
          userSearch.map((user) =>
            friends.map((friend) =>
              friend.secondUserId == user.id ? (
                <Friend
                  key={user.id}
                  userId={+id}
                  deleteFriend={deleteFriend}
                  friendId={user.id}
                  user={user.data}
                  loginId={login.id}
                ></Friend>
              ) : (
                <></>
              )
            )
          )
        ) : (
          <h2 className="no-friends">No friend found</h2>
        )}
      </div>
    </>
  ) : (
    <Spinner className="spinner" animation="border" variant="secondary" />
  );
};

export default FriendList;
