import Dashboard from "../Components/DashBoard/DashBoard";
import { URLS } from "../Config/config";
import Login from "../Pages/Authentication/Login";
import SignUp from "../Pages/Authentication/SignUp";
import ChangePassword from "../Pages/ChangePassword";
import DeleteProfile from "../Pages/DeleteProfile";
import Home from "../Pages/Home";
import UserProfile from "../Pages/UserProfile";

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
    },
    {path : URLS.PROFILE, element : UserProfile,
        isLayout:true
    },
    {path:URLS.DELETE, element : DeleteProfile, isLayout:true},
    {path:URLS.CHANGE_PASSWORD, element : ChangePassword, isLayout : true}
]