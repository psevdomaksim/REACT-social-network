import "../css/Users.css";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { StoreContext } from "../..";
import User from "./User";
import { useState } from "react";
import { useEffect } from "react";
import { BiSearch } from "react-icons/bi";

const UserList = () => {
  const store = useContext(StoreContext);

  let state = store.getState();

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
        { state.usersPage.users && userSearch.map((user) => (
          <User id={user.id} user={user.data} />
        ))}
      </div>
    </>
  );
};

export default UserList;
