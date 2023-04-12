import "../css/Users.css";
import { Form } from "react-bootstrap";
import { useContext } from "react";
import { StoreContext } from "../..";
import User from "./User";
import { useState } from "react";
import { useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { fetchUsersThunkCreator } from "../../Store/ActionCreators/UsersActionCreators";

const UserList = () => {
  const store = useContext(StoreContext);

  const [users, setUsers] = useState();
  const [filter, setFilter] = useState(users);

  const fetchUsers = () => {
    store.dispatch(fetchUsersThunkCreator());
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  store.subscribe(() => setUsers(store.getState().usersPage.users));

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

  return (
    <>
      <div className="users-wrapper">
        <h3 className="userlist-header">Users</h3>
        <Form className="userlist-form">
          <BiSearch size={30}></BiSearch>
          <Form.Control
            type="text"
            placeholder="Find user"
            onChange={onChange}
          />
        </Form>
        {users &&
          userSearch.map((user) => (
            <User key={user.id} id={user.id} user={user.data} />
          ))}
      </div>
    </>
  );
};

export default UserList;
