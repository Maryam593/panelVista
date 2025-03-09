import Dashboard from "../Components/DashBoard/DashBoard";
import { URLS } from "../Config/config";
import Login from "../Pages/Authentication/Login";
import SignUp from "../Pages/Authentication/SignUp";
import Home from "../Pages/Home";

export const userRoutes = [
    {
        path : URLS.AUTH.LOGIN,
        element : Login,
    },
    {
        path : URLS.AUTH.SIGNUP,
        element : SignUp
    },
    {
        path:URLS.DASHBOARD,
        element:Dashboard,
        isLayout : true
    },
    {path: URLS.HOME,
        element:Home,
    }
]