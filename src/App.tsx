import { Widget } from './pages/Widget'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import { List } from './pages/List'
import { Login } from './pages/Login'
import { ItemDetails } from './pages/ItemDetails'
import express from 'express'
import { Error } from './pages/Error'
import { CreateItem } from './pages/CreateItem'
import { PaginaTeste } from './pages/PaginaTeste'
// import {Routes} from './routes';
// var cors = require('cors');

export function App() {
  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route path="/" element={<Widget/>} />
        <Route path="/teste" element={<PaginaTeste/>} />
        <Route path="/list/:type" element={<List key={Date.now()}/>} />
        {/* <Route
          path="/list/professional"
          element={<List/>}
        />
        <Route path="/list/vehicle" element={<List type="vehicle" />} />
        <Route
          path="/list/checking_account"
          element={<List type="checking_account" />}
        /> */}
        <Route
          path="/list/:type/item_details/:id"
          element={<ItemDetails />}
        />
        <Route
          path="/list/called/create/:id"
          element={<CreateItem />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<CreateItem/>} />
        {/* <Route path="/create/:id" element={<CreateItem />} /> */}
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}
