import {
  BrowserRouter as Router,
  Routes as RouterRoutes,
  Route
} from "react-router-dom";
// import { useAuth } from "../hooks/auth";
import { ItemDetails } from "../pages/ItemDetails";
import { Login } from "../pages/Login";
import { Error } from "../pages/Error";
import { CreateItem } from "../pages/CreateItem";
import { Widget } from "../pages/Widget";
import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';
import { List } from "../pages/List";

export function Routes() {
    // const { logged } = useAuth();

    return (
        <Router>
            <RouterRoutes>
                <Route path='/' element={<Widget/>}/>
                <Route path='/list/attendance' element={<List type="attendance"/>}/>
                <Route path='/create' element={<CreateItem/>}/>
                <Route path='/list/professional' element={<List type="professional"/>}/>
                <Route path='/list/vehicle' element={<List type="vehicle"/>}/>
                <Route path='/list/checking_account' element={<List type="checking_account"/>}/>
                <Route path='/list/attendance/item_details/:1' element={<ItemDetails/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='*' element={<CreateItem/>}/>
            </RouterRoutes>
        </Router>
        // <BrowserRouter>
        //     {logged ? <AppRoutes/> : <AuthRoutes/>}
        // </BrowserRouter>
    );
}