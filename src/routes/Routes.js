import DashboardLayout from "../layout/DashboardLayout";
import Blog from "../pages/blog/Blog";
import Category from "../pages/category/Category";
import AddProduct from "../pages/dashboard/addproduct/AddProduct";
import Allbuyers from "../pages/dashboard/allbuyers/Allbuyers";
import Allsellers from "../pages/dashboard/allsellers/Allsellers";
import Dashboard from "../pages/dashboard/Dashboard";
import MyProducts from "../pages/dashboard/myproducts/MyProducts";
import Login from "../pages/login/Login";
import ErrorPage from "../pages/shared/errorPage/ErrorPage";
import Signup from "../pages/signup/Signup";
import PrivateRoute from "./PrivateRoute";

const {createBrowserRouter} = require("react-router-dom");
const {default: MainLayout} = require("../layout/MainLayout");
const {default: Home} = require("../pages/home/Home");


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
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
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/category/:id',
                element: <PrivateRoute> <Category></Category></PrivateRoute>,
                loader: ({params}) => fetch(`https://mobile-wizard-server.vercel.app/category/${params.id}`)
            },

        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },

            {
                path: '/dashboard/allsellers', // admin
                element: <Allsellers></Allsellers>
            },
            {
                path: '/dashboard/allbuyers', // admin
                element: <Allbuyers></Allbuyers>
            },
            {
                path: '/dashboard/addproduct', // seller
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/myproducts', // seller
                element: <MyProducts></MyProducts>
            },


        ]
    },
]);

export default router;