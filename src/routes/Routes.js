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
    }
]);

export default router;