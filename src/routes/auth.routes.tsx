import { List } from "phosphor-react";
import { Router, Routes, Route } from "react-router-dom";
import { ItemDetails } from "../pages/ItemDetails";
import { Login } from "../pages/Login";
import { Error } from "../pages/Error";
import { Widget } from "../pages/Widget";

export function AuthRoutes() {
    return (
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    );
}