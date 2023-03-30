import React, { createContext } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./Store/Store"
import state from "./Store/State";


export const StoreContext = createContext();

const root = ReactDOM.createRoot(document.getElementById("root"));

let rerender = (state) => {
    root.render(
    <StoreContext.Provider value={store}>
             <App/>,
     
    </StoreContext.Provider>,

    document.getElementById("root")
    );
}

rerender(store.getState())

store.subscribe(()=>{
    
    let state = store.getState();
    rerender(state);
})