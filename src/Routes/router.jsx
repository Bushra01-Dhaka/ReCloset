import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import OurGoal from "../Pages/OurGoal/OurGoal";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import DonateYourCloths from "../Pages/DonateYourCloths/DonateYourCloths";
import PrivateRoutes from "./PrivateRoutes";
import DashbordLayout from "../Layouts/DashbordLayout";
import MyListingCloths from "../Pages/Dashboard/MyListingCloths/MyListingCloths";
import DashboardHome from "../Pages/DashboardHome/DashboardHome";
import MyDonations from "../Pages/Dashboard/MyDonations/MyDonations";
import MyResellItems from "../Pages/Dashboard/MyResellItems/MyResellItems";
import MyProfile from "../Pages/Dashboard/MyProfile/MyProfile";
import BrowseCollection from "../Pages/BrowseCollections/BrowseCollection";
import ResellProductDetails from "../CustomThing/ResellProductDetails";
import MyWishlist from "../Pages/Dashboard/MyWishLists/MyWishlist";
import Payment from "../Pages/Payment/Payment";
import MyPaymentHistory from "../Pages/Dashboard/MyPaymentHistory/MyPaymentHistory";
import ForbiddenPage from "../Pages/ForbiddenPage/ForbiddenPage";
import MakeAdmin from "../Pages/Dashboard/MakeAdmin/MakeAdmin";

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
        },
        {
          path:"/browseCollections",
          Component:BrowseCollection
        },
        {
          path:"/cloths/:id",
          Component:ResellProductDetails,
        },
        {
          path:"/forbiddenPage",
          Component:ForbiddenPage,
        }
    ]
  },

  // Dashboard
  {
    path:"/dashboard",
    element:<PrivateRoutes><DashbordLayout></DashbordLayout></PrivateRoutes>,
    children:[
      {
        index:true,
        Component:DashboardHome,
      },
       {
        path:"myListing",
        Component:MyListingCloths,
       },
       {
        path:"myDonations",
        Component:MyDonations,
       },
       {
        path:"myResellItems",
        Component:MyResellItems,
       },
       {
        path:"myProfile",
        Component:MyProfile,
       },
       {
        path:"wishList",
        Component:MyWishlist,
       },
       {
        path:"payment/:id",
        Component:Payment,
       },
       {
        path:"myPaymentHistory",
        Component:MyPaymentHistory,
       },
       {
        path:"makeAdmin",
        Component:MakeAdmin,
       }
    ]
  }
]);
export default router