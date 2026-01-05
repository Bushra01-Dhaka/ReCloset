import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children:[
        {
            path:"/",
            Component: Home,
        }
    ]
  },
]);
export default router