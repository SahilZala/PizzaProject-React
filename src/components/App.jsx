import LoginComponent from "./login/LoginComponent";
import "./style/app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomerHomeComponent from "./customer_home/CustomerHomeComponent";
import AdminHomeComponent from "./admin_home/AdminHomeComponent";

import Index from "./Index";
import Home from "./home/Home";
import Logout from "./logout/Logout";

export default function App(){
    return (<div className="app">
        <BrowserRouter>
            <Routes>

                <Route index path="/" element={<Index/>}></Route>
                <Route  path="/login" element={<LoginComponent/>}></Route><Route index path="/login" element={<LoginComponent/>}></Route>
                <Route index path="/logout" element={<Logout/>}></Route>
                <Route path="/customer/home" element={<CustomerHomeComponent/>}></Route>
                <Route path="/admin/home" element={<AdminHomeComponent/>}></Route>
                <Route path="/home" element={<Home/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>);
}