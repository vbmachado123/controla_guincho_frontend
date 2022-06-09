import { Widget } from "./pages/Widget";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { List } from "./pages/List";

export function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Widget/>}/>
        <Route path='/list' element={<List/>}/>
        {/* <Route path='/contact' element={<Contact/>}/> */}

      </Routes>
    </Router>
  );
}