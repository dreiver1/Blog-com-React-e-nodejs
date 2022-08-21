import React, { useContext } from 'react';
import {Route, BrowserRouter, Routes, Navigate} from 'react-router-dom';
import Home from '../Pages/Home';
import Post from '../Pages/Post';
import Login from '../Pages/Login';
import Controlers from '../Pages/Controlers';
import { AuthContext, AuthProvider } from '../context/AuthContext';


const Private = ({chidren})=>{
    const {authenticated} = useContext(AuthContext)
    if(!authenticated){
        return <Navigate to={"/login"} />
    }
    return chidren;
}

export default function Routers(){

    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={Home()}></Route>
                    <Route path="/posts" element={Post()}></Route>
                    <Route path="/login" element={Login()}></Route>
                    <Route path="/controlers" element={<Private>Controlers()</Private>}></Route>
                </Routes>
            </AuthProvider>
        </BrowserRouter>
)}