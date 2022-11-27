import DashboardLayout from "../layout/DashboardLayout";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";

const {createBrowserRouter} = require("react-router-dom");
const {default: MainLayout} = require("../layout/MainLayout");
const {default: Home} = require("../pages/home/Home");


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            }

        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard',
                element: <Home></Home>
            },
            {
                path: '/dashboard/myorders', // buyers
                element: <Login></Login>
            },
            {
                path: '/dashboard/addproduct', // seller
                element: <Signup></Signup>
            },
            {
                path: '/dashboard/myproducts', // seller
                element: <Signup></Signup>
            },
            {
                path: '/dashboard/allsellers', // seller
                element: <Signup></Signup>
            },
            {
                path: '/dashboard/allbuyers', // seller
                element: <Signup></Signup>
            },
            {
                path: '/dashboard/reporteditems', // seller
                element: <Signup></Signup>
            },

        ]
    },
]);

export default router;