import React, { useContext, useState} from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import  Home from "../pages/Home"
import  Dialogs from "../pages/Dialogs"
import DialogPage from "../pages/DialogPage"


const AppRoutes = () =>{
    
        return(
     
       <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/dialogs" element={<Dialogs/>}/>
            <Route path="/dialogs/:id" element={<DialogPage/>}/>
        </Routes>
      
        )
}
export default AppRoutes