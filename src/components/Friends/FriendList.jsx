import "../css/Users.css";
import { Form, Image } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { StoreContext } from "../..";
import Friend from "./Friend";
import { useState } from "react";
import { useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { fetchUsersActionCreator } from "../../Store/ActionCreators/UsersActionCreators";

const FriendList = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(false);

  const [users, setUsers] = useState();

  const store = useContext(StoreContext);

  let state = store.getState();

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
  }, [users]);

  const fetchOneUser = async () => {
    if (users != undefined) {
      users.find((u) => {
        u.id == id ? setCurrentUser(u) : <></>;
      });
      setLoading(true);
    }
  };

  const [filter, setFilter] = useState(state.usersPage.users);

  useEffect(() => {
    setFilter(state.usersPage.users);
  }, [state.usersPage.users]);

  const getSearch = () => {
    if (filter) {
      return filter;
    }
    return state.usersPage.users;
  };

  const userSearch = getSearch();

  const onChange = (event) => {
    setFilter(
      state.usersPage.users.filter((user) => {
        return user.data.name
          .toLowerCase()
          .includes(event.target.value.toLowerCase());
      })
    );
  };

  return loading ? (
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
        {state.usersPage.users &&
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
    <></>
  );
};

export default FriendList;
