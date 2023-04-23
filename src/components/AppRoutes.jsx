import React, { useContext, useState} from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import  Home from "../pages/Home"
import  Dialogs from "../pages/Dialogs"
import DialogPage from "../pages/DialogPage"
import UserPage from "../pages/UsersPage"
import FriendsPage from "../pages/FriendsPage"
import FriendRequestsPage from "../pages/FriendRequestsPage"


const AppRoutes = () =>{
    
        return(
     
       <Routes>
            <Route exact path="/profile/:id" element={<Home/>}/>
            <Route path="/dialogs" element={<Dialogs/>}/>
            <Route path="/dialogs/:id" element={<DialogPage/>}/>
            <Route path="/users" element={<UserPage/>}/>
            <Route path="/friends/:id" element={<FriendsPage/>}/>
            <Route path="/friendRequests/:id" element={<FriendRequestsPage/>}/>

            <Route path="*" element={<Navigate to="/profile/69"/>} />

        </Routes>
      
        )
}
export default AppRoutes