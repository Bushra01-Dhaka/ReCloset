import { Link, NavLink } from "react-router";
import usePrimaryBtn from "../Hooks/usePrimaryBtn";
const Navbar = () => {
  const primaryBtn = usePrimaryBtn();
  const navItems = (
    <>
      <li className="py-2 lg:py-0 text-2xl lg:text-[16px]">
        <NavLink
          to="/ourGoal"
          className={({ isActive }) =>
            isActive ? "text-primary font-semibold" : ""
          }
        >
          Our Goal
        </NavLink>
      </li>

      <li className="py-2 lg:py-0 text-2xl lg:text-[16px]">
        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive ? "text-primary font-semibold" : ""
          }
        >
          Collections
        </NavLink>
      </li>

      <li className="py-2 lg:py-0 text-2xl lg:text-[16px]">
        <NavLink
          to="/myProjects"
          className={({ isActive }) =>
            isActive ? "text-primary font-semibold" : ""
          }
        >
          Resell Now
        </NavLink>
      </li>

      <li className="py-2 lg:py-0 text-2xl lg:text-[16px]">
        <NavLink
          to="/contactUs"
          className={({ isActive }) =>
            isActive ? "text-primary font-semibold" : ""
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar lg:bg-transparent bg-slate-900 bg-opacity-40 md:max-w-screen-2xl mx-auto  lg:px-20 px-10 fixed z-99">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/">
          <div className="flex justify-center items-center">
            {/* <img
              className="w-[30px] h-[30px] rounded-full bg-primary
                 animate-spin [animation-duration:6s] [animation-timing-function:linear]"
              src={logo}
              alt="Logo"
            /> */}

            <h2
              className="text-lg lg:text-2xl font-bold tracking-wide
      bg-gradient-to-r ml-[-4px] from-primary to-accent
      bg-clip-text text-transparent"
            >
              ReCloset
            </h2>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>

      <div className="navbar-end">
         <Link to="/register">
          <button className={primaryBtn}>Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
