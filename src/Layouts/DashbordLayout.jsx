import { FaDonate } from "react-icons/fa";
import { MdInventory } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { Link, NavLink, Outlet } from "react-router";

const DashbordLayout = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-start justify-start">
        <div className="navbar bg-black w-full lg:hidden">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-2"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="mx-2 flex-1 px-2 font-bold text-secondary">
            Dashboard
          </div>
          <div className="hidden flex-none lg:block ">
            <ul className="menu menu-horizontal ">
              {/* Navbar menu content here */}
              <Link to="/">
                <div className="flex justify-center items-center">
                  <h2
                    className="text-lg text-center lg:text-2xl font-bold tracking-wide
      bg-gradient-to-r ml-[-4px] from-primary to-accent
      bg-clip-text text-transparent"
                  >
                    ReCloset
                  </h2>
                </div>
              </Link>

              <li>
                <NavLink
                  to="/dashboard"
                  className="flex items-center gap-3 text-secondary py-2 hover:bg-primary mb-4 mx-6 hover:font-bold"
                >
                  <RxDashboard className="text-lg" />
                  Dashboard
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/dashboard/myListing"
                  className="flex items-center gap-3 text-secondary py-2 hover:bg-primary mb-4 mx-6 hover:font-bold"
                >
                  <MdInventory className="text-lg" />
                  My Listing Cloths
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/myDonations"
                  className={({ isActive }) =>
                    `flex items-center gap-3 py-2 mb-4 mx-6 text-secondary hover:font-bold
       ${isActive ? "shadow-primary shadow-lg font-bold" : "hover:bg-primary"}`
                  }
                >
                  <FaDonate className="text-lg" />
                  My Donations
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        {/* Page content here */}
        <div className=" lg:w-[100%] w-full min-h-screen bg-linear-to-br from-black to-primary">
          <Outlet></Outlet>
        </div>
        {/* Page content here */}
      </div>

      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-black min-h-full w-72 p-4">
          {/* Sidebar content here */}
          <div className="text-start flex items-start p-4 mb-6">
            {/* <ParcelioLogo></ParcelioLogo> */}
            <Link to="/">
              <div className="flex justify-center items-center">
                <h2
                  className="text-lg text-center lg:text-2xl font-bold tracking-wide
      bg-gradient-to-r ml-[-4px] from-primary to-accent
      bg-clip-text text-transparent"
                >
                  ReCloset
                </h2>
              </div>
            </Link>
          </div>
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `flex items-center gap-3 py-2 mb-4 mx-6 text-secondary hover:font-bold
     ${isActive ? " shadow-primary shadow-lg  font-bold" : "hover:bg-primary"}`
              }
            >
              <RxDashboard className="text-lg" />
              Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/dashboard/myListing"
              className={({ isActive }) =>
                `flex items-center gap-3 py-2 mb-4 mx-6 text-secondary hover:font-bold
     ${isActive ? " shadow-primary shadow-lg  font-bold" : "hover:bg-primary"}`
              }
            >
              <MdInventory className="text-lg" />
              My Listing Cloths
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/dashboard/myDonations"
              className={({ isActive }) =>
                `flex items-center gap-3 py-2 mb-4 mx-6 text-secondary hover:font-bold
       ${isActive ? "shadow-primary shadow-lg font-bold" : "hover:bg-primary"}`
              }
            >
              <FaDonate className="text-lg" />
              My Donations
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashbordLayout;
