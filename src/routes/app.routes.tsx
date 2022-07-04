import { List } from "phosphor-react";
import { Router, Routes, Route } from "react-router-dom";
import { ItemDetails } from "../pages/ItemDetails";
import { Login } from "../pages/Login";
import { Error } from "../pages/Error";
import { Widget } from "../pages/Widget";

export function AppRoutes() {
    return (
      <Routes>
        <Route path='/' element={<Widget/>}/>
        <Route path='/list/attendance' element={<List type="attendance"/>}/>
        <Route path='/list/professional' element={<List type="professional"/>}/>
        <Route path='/list/vehicle' element={<List type="vehicle"/>}/>
        <Route path='/list/checking_account' element={<List type="checking_account"/>}/>
        <Route path='/item_details' element={<ItemDetails/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    );
}