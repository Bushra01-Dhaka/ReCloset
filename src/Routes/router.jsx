import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import OurGoal from "../Pages/OurGoal/OurGoal";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import DonateYourCloths from "../Pages/DonateYourCloths/DonateYourCloths";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children:[
        {
            path:"/",
            Component: Home,
        },
        {
            path:"/ourGoal",
            Component:OurGoal,
        },
        {
          path:"/contactUs",
          Component: ContactUs,
        },
        {
          path:"/register",
          Component:Register,
        },
        {
          path:"/login",
          Component: Login,
        },
        {
          path:"/donateCloths",
          element: <PrivateRoutes><DonateYourCloths></DonateYourCloths></PrivateRoutes>
        }
    ]
  },
]);
export default router