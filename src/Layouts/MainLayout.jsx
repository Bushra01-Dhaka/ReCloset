import { Outlet, ScrollRestoration, useLocation } from "react-router"
import Navbar from "../Reuse/Navbar"
import Footer from "../Reuse/Footer"


const MainLayout = () => {
  const location = useLocation();
   const noHeaderFooter = location.pathname.includes('/register') || location.pathname.includes('/login');
  return (
    <div>
       {
        noHeaderFooter || <Navbar></Navbar>
       }
        <Outlet/>
       {
        noHeaderFooter ||  <Footer></Footer>
       }
        <ScrollRestoration/>
    </div>
  )
}

export default MainLayout