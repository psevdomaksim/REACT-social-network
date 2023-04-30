import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./components/AppRoutes";
import { useContext, useEffect } from "react";
import { StoreContext } from ".";
import { checkAuth } from "./http/authAPI";
import { setLoginThunkCreator } from "./Store/ActionCreators/AuthActionCreators";


function App() {
  const store = useContext(StoreContext);

  useEffect(() => {
    store.dispatch(setLoginThunkCreator());
}, []);

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
