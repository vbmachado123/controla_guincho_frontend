import { Router, Routes, Route } from "react-router-dom";
import { ItemDetails } from "../pages/ItemDetails";
import { Login } from "../pages/Login";
import { Error } from "../pages/Error";
import { Widget } from "../pages/Widget";
import { CreateItem } from "../pages/CreateItem";
import { List } from "../pages/List";

export function AppRoutes() {
    return (
      <Routes>
        <Route path='/' element={<Widget/>}/>
        <Route path='/list/attendance' element={<List key={Date.now()} type="attendance"/>}/>
        <Route path='/list/professional' element={<List key={Date.now()} type="professional"/>}/>
        <Route path='/create' element={<CreateItem key={Date.now()}/>}/>
        <Route path='/list/vehicle' element={<List key={Date.now()} type="vehicle"/>}/>
        <Route path='/list/checking_account' element={<List key={Date.now()} type="checking_account"/>}/>
        <Route path='/item_details' element={<ItemDetails/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='*' element={<CreateItem/>}/>
      </Routes>
    );
}