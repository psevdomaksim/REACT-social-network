import React, { createContext } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./Store/Store";

export const StoreContext = createContext();

const root = createRoot(document.getElementById("root"));

root.render(
  <StoreContext.Provider value={store}>
    <App />,
  </StoreContext.Provider>
);
