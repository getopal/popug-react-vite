import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/index.jsx";
import Login from "../pages/Login/index.jsx";


const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Login />} path="/login" />
        </Routes>
    );
};

export default AppRoutes;