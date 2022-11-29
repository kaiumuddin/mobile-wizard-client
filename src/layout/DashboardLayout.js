import React, {useContext, useEffect, useState} from 'react';
import {Link, Outlet} from "react-router-dom";
import {AuthContext} from "../contexts/AuthProvider";
import Navbar from "../pages/shared/Navbar/Navbar";

const DashboardLayout = () => {

    const {user} = useContext(AuthContext);

    const [userRole, setUserRole] = useState(null);

    useEffect(() => {
        if (user?.email) {
            const url = `http://localhost:5000/users/${user?.email}`;
            console.log(url);
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    console.log("recieved", data);
                    setUserRole(data.role);
                });
        }
    }, [user?.email]);



    return (
        <>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="side-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col p-5">

                    <Outlet></Outlet>

                    <label htmlFor="side-drawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="side-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                        {
                            user?.email && userRole === "admin" &&
                            <>
                                <li><Link to="/dashboard/allsellers">All seller</Link></li>
                                <li><Link to="/dashboard/allbuyers">All Buyers</Link></li>
                            </>
                        }
                        {
                            user?.email && userRole === "seller" &&
                            <>
                                <li><Link to="/dashboard/addproduct">Add a product</Link></li>
                                <li><Link to="/dashboard/myproducts">My Products</Link></li>
                            </>
                        }
                        {
                            user?.email && userRole === "buyer" &&
                            <>
                                <li><Link to="">My Orders</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </>

    );
};

export default DashboardLayout;