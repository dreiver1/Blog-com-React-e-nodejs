import {Route, BrowserRouter, Routes} from 'react-router-dom';
import Home from '../Pages/Home';
import Post from '../Pages/Post';


export default function aplication(){
    return (
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={Home()}>
            </Route>
            <Route path="/post" element={Post()}></Route>
        </Routes>
        </BrowserRouter>
        </>
)}