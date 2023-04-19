import "../css/Users.css";
import { Form } from "react-bootstrap";
import { useContext, useRef } from "react";
import { StoreContext } from "../..";
import User from "./User";
import { useState } from "react";
import { useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import {
  cleanAllUsersActionCreator,
  fetchUsersThunkCreator,
} from "../../Store/ActionCreators/UsersActionCreators";
import { useLocation} from "react-router";

const UserList = (props) => {
  const store = useContext(StoreContext);

  const location = useLocation();

  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState(users);

  const [limit, setLimit] = useState(store.getState().usersPage.limit);
  const [page, setPage] = useState(1);

  const observer = useRef(null);

  const fetchUsers = () => {
    store.dispatch(fetchUsersThunkCreator(limit, page));
  };

  useEffect(() => {
    fetchUsers();
  }, [page]);

  
  useEffect(() => {
    store.dispatch(cleanAllUsersActionCreator());
  }, [location.pathname]);


  store.subscribe(() => {
    setUsers(store.getState().usersPage.allUsers);
  });

  useEffect(() => {
    if (props.trigger === null && page === undefined) return;
    if (observer.current) observer.current.disconnect();
    if (page > limit) return;
    const callback = function (entries, observer) {
      if (entries[0].isIntersecting) {
        setPage((page) => page + 1);
      }
    };
    observer.current = new IntersectionObserver(callback);
    observer.current.observe(props.trigger.current);
  }, []);

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
