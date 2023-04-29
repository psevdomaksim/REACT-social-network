import React, { useContext, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { StoreContext } from "..";
import { LOGIN_ROUTE } from "../utils/routes_consts";

import { authRoutes, publicRoutes } from "../routes";

const AppRoutes = () => {
    const store = useContext(StoreContext);

console.log(store.getState().auth.isAuth)


  return (
    <Routes>
      {store.getState().auth.isAuth === true &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component/>} exact/>
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component/>} exact />
      ))}
      <Route path="*" element={<Navigate to={LOGIN_ROUTE} />} />
    </Routes>
  );
};
export default AppRoutes;
