import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./components/AppRoutes";
import { fetchUsersActionCreator } from "./Store/ActionCreators/UsersActionCreators";
import { useContext, useEffect } from "react";
import { StoreContext } from ".";





function App() {

//   const store = useContext(StoreContext);

//   let state = store.getState();

//   const fetchUsers = async () =>{
//     fetchUsersActionCreator().then((data) => {
//        store.dispatch(data);
//        state = store.getState();
//      });
// }


//   useEffect(() => {
//     fetchUsers()
//   }, []);




  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
