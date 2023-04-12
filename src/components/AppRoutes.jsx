import React, { useContext, useState} from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import  Home from "../pages/Home"
import  Dialogs from "../pages/Dialogs"
import DialogPage from "../pages/DialogPage"
import UserPage from "../pages/UsersPage"
import FriendsPage from "../pages/FriendsPage"


const AppRoutes = () =>{
    
        return(
     
       <Routes>
            <Route exact path="/profile/:id" element={<Home/>}/>
            <Route path="/dialogs" element={<Dialogs/>}/>
            <Route path="/dialogs/:id" element={<DialogPage/>}/>
            <Route path="/users" element={<UserPage/>}/>
            <Route path="/friends/:id" element={<FriendsPage/>}/>

            <Route path="*" element={<Navigate to="/dialogs"/>} />

        </Routes>
      
        )
}
export default AppRoutes