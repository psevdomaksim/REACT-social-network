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
  fetchOneUserActionCreator,
  fetchOneUserThunkCreator,
  fetchUsersThunkCreator,
} from "../../Store/ActionCreators/UsersActionCreators";

const FriendList = () => {
  const { id } = useParams();

  const [users, setUsers] = useState();
  const [currentUser, setCurrentUser] = useState();
  const [filter, setFilter] = useState(users);
  const store = useContext(StoreContext);


  const fetchUsers = () => {
    store.dispatch(fetchUsersThunkCreator());
  };

  const fetchOneUser = () => {
    store.dispatch(fetchOneUserThunkCreator(id));
  };

  
  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    fetchOneUser();
  }, [id, users]);

 

  store.subscribe(() => {
    setUsers(store.getState().usersPage.users)
    setCurrentUser(store.getState().usersPage.currentUser)
  })
  
  

  const isEmpty = () => {
    if (currentUser !== undefined ) {
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
        <Link className="sidebar-link" to={`/${id}`}>
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
          <h3> Friends</h3>

          <Link to="/users">
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
        {users &&
          userSearch.map((user) =>
            currentUser.friends.map((friend) =>
              friend == user.id ? (
                <Friend key={user.id} id={user.id} user={user.data}></Friend>
              ) : (
                <></>
              )
            )
          )}
      </div>
    </>
  ) : (
    <Spinner className="spinner" animation="border" variant="secondary" />
  );
};

export default FriendList;
