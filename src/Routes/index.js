import React from 'react';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import Home from '../Pages/Home';
import Post from '../Pages/Post';
import Login from '../Pages/Login';
import Controlers from '../Pages/Controlers';

export default function App(){
    return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={Home()}></Route>
                <Route path="/posts" element={Post()}></Route>
                <Route path="/login" element={Login()}></Route>
                <Route path="/controlers" element={Controlers()}></Route>
            </Routes>
        </BrowserRouter>
    </>
)}