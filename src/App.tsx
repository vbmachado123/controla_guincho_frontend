import { Widget } from "./pages/Widget";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { List } from "./pages/List";
import { Login } from "./pages/Login";
import { ItemDetails } from "./pages/ItemDetails";
import express from "express";
import { Error } from "./pages/Error";

export function App() {
  // var app = express();

  // app.use(function(req, res, next) {
  //   res.header("Access-Control-Allow-Origin", "*");
  //   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  //   next();
  // });

  return (
    <Router>
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
    </Router>
  );
}