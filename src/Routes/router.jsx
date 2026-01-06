import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import OurGoal from "../Pages/OurGoal/OurGoal";

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
        }
    ]
  },
]);
export default router