import React, { useContext, useState} from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import  Home from "../pages/Home"
import  Dialogs from "../pages/Dialogs"
import DialogPage from "../pages/DialogPage"
import UserPage from "../pages/UsersPage"


const AppRoutes = () =>{
    
        return(
     
       <Routes>
            <Route exact path="/:id" element={<Home/>}/>
            <Route path="/dialogs" element={<Dialogs/>}/>
            <Route path="/dialogs/:id" element={<DialogPage/>}/>
            <Route path="/users" element={<UserPage/>}/>

            <Route path="*" element={<Navigate to="/dialogs"/>} />

        </Routes>
      
        )
}
export default AppRoutes