import { Widget } from "./pages/Widget";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { List } from "./pages/List";
import { Login } from "./pages/Login";
import { ItemDetails } from "./pages/ItemDetails";

export function App() {
  return (
    <Router >
      <Routes>
        <Route path='/' element={<Widget/>}/>
        <Route path='/list' element={<List/>}/>
        <Route path='/item_details' element={<ItemDetails/>}/>
        <Route path='/login' element={<Login/>}/>
        {/* <Route path='/contact' element={<Contact/>}/> */}

      </Routes>
    </Router>
  );
}