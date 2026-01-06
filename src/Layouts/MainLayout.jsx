import { Outlet, ScrollRestoration } from "react-router"
import Navbar from "../Reuse/Navbar"


const MainLayout = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Outlet/>
        <ScrollRestoration/>
    </div>
  )
}

export default MainLayout