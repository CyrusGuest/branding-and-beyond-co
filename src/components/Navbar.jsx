import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import menuDots from "../../images/menu-dots.svg";

const Navbar = () => {
  let { MobileNavOpen, setMobileNavOpen } = useContext(AppContext);

  return (
    <div className="flex">
      <Link to="/">
        <div className="flex ml-2">
          <img src={logo} alt="" className="cursor-pointer" />
          <h1 className="text-2xl font-bold text-brand-primary my-auto cursor-pointer lg:inline ml-2">
            krale branding
          </h1>
        </div>
      </Link>

      <div className="my-auto ml-auto hidden md:inline">
        <ul className="flex gap-6 mr-6 text-xl text-brand-primary font-bold ">
          <li className="my-auto">
            <Link to="/packages">packages</Link>
          </li>
          <li className="my-auto">
            <Link to="/aboutus">about us</Link>
          </li>
          <li className="my-auto">
            <Link to="/contactus">contact us</Link>
          </li>
          <Link to="/signin">
            <li className="my-auto cursor-pointer dark:hover:bg-brand-secondary hover:bg-white dark:hover:text-brand-primary hover:text-brand-primary bg-brand-primary text-white dark:text-brand-secondary drop-shadow-lg py-2 mt-1 px-6 font-semibold rounded-md transition duration-300">
              sign in
            </li>
          </Link>
        </ul>
      </div>
      <img
        onClick={() => setMobileNavOpen(!MobileNavOpen)}
        src={menuDots}
        alt=""
        className="my-auto ml-auto mr-4 float-right cursor-pointer md:hidden"
      />
    </div>
  );
};

export default Navbar;
