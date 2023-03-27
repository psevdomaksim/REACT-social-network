import React, { createContext } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Posts } from "../src/components/STATE";

export const Context = createContext(null);

ReactDOM.render(
  <Context.Provider value={Posts}>
    <App />,
  </Context.Provider>,

  document.getElementById("root")
);
