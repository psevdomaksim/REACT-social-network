import React, { useContext, useState} from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import  Home from "../pages/Home"
import  Dialogs from "../pages/Dialogs"

const AppRoutes = () =>{
    
        return(
     
       <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/dialogs" element={<Dialogs/>}/>
          
        </Routes>
      
        )
}
export default AppRoutes