import React from 'react';
import {Outlet} from "react-router-dom";
import Home from "../pages/home/Home";
import Navbar from "../pages/shared/Navbar/Navbar";

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;