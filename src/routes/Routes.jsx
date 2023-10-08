import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from '../layouts/Root'
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Galary from "../pages/Galary/Galary";
import Details from "../pages/Details/Details";

const router = createBrowserRouter([

    {
        path: '/',
        element: <Root></Root>,
        children: [


            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/career-fairs.json')
            },

            {
                path: '/news/:id',
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: () => fetch('career-fairs.json')

            },

            {
                path: '/gallery',
                element: <PrivateRoute><Galary></Galary></PrivateRoute>
            },

            {

                path: '/login',
                element: <Login></Login>
            },
            {

                path: '/register',
                element: <Register></Register>
            }
        ]

    }
]);
export default router;

