import React, { createContext } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./Store/Store"

export const StoreContext = createContext();

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <StoreContext.Provider value={store}>
             <App/>,
     
    </StoreContext.Provider>,

    document.getElementById("root")
    );