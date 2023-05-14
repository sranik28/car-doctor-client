import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SingUp from "../pages/SingUp";
import CheckOut from "../pages/CheckOut";
import Bookings from "../pages/Bookings";
import PrivateRouter from "../private/PrivateRoute";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/sign-up',
                element: <SingUp />
            },
            {
                path: '/bookings',
                element: <PrivateRouter><Bookings /></PrivateRouter>
            },
            {
                path: '/check-out/:id',
                element: <PrivateRouter> <CheckOut /></PrivateRouter>,
                // loader: ({ params }) => console.log(params.id)
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
        ]
    }
]);

export default Router