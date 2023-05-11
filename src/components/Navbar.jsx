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
        <div className="flex mt-6 ml-4 w-36 md:w-52">
          <img src={logo} alt="" className="cursor-pointer" />
        </div>
      </Link>

      <div className="my-auto ml-auto hidden md:inline">
        <ul className="flex gap-6 mr-6 text-2xl font-bold ">
          <li className="my-auto gradient-text hover:-rotate-6 hover:text-3xl duration-200">
            <Link to="/packages">packages</Link>
          </li>
          <li className="my-auto gradient-text hover:rotate-6 hover:text-3xl duration-200">
            <Link to="/casestudies">case studies</Link>
          </li>
          <Link to="/contactus">
            <li className="my-auto cursor-pointer gradient-background text-white glow-on-hover shadow-lg py-2 mt-1 px-6 font-semibold rounded-md transition duration-300">
              contact us
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
