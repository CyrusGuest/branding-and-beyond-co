import React from "react";
import { Link } from "react-router-dom";
import pinterestLogo from "../../images/white/pinterest.svg";
import twitterLogo from "../../images/white/twitter.svg";
import instaLogo from "../../images/white/insta.svg";

const Footer = () => {
  return (
    <div className="px-6 pt-6 pb-10  mt-10 md:flex bg-primary">
      <div className="my-8 flex">
        <div className="mr-16">
          <h1 className="text-4xl font-bold text-white ">company</h1>
          <ul>
            {/* <Link to="/aboutus">
              <li className="text-xl text-white cursor-pointer mt-2">
                about us
              </li>
            </Link> */}
            <Link to="/getstarted">
              <li className="text-xl text-white cursor-pointer mt-2">
                contact us
              </li>
            </Link>
            <Link to="/policy">
              <li className="text-xl text-white cursor-pointer mt-2">policy</li>
            </Link>
          </ul>
        </div>

        <div>
          <h1 className="text-4xl font-bold text-white">shop</h1>
          <ul>
            <Link to="/packages">
              <li className="text-xl text-white  cursor-pointer mt-2">
                packages
              </li>
            </Link>
          </ul>
        </div>
      </div>

      <div className="mt-10 md:my-8 md:mx-16">
        <h1 className="text-4xl font-bold text-white ">
          get the latest news & offers
        </h1>
        <form action="" className="flex flex-col">
          <input
            className="mt-6 w-4/5 text-2xl bg-white rounded-lg pl-4 py-2 text-primary placeholder:text-primary outline-none drop-shadow-lg"
            placeholder="Email Address"
            type="email"
            name="email"
            id="email"
          />
          <button className="mt-4 btn w-4/5 shadow-lg text-center bg-white">
            <span className="text-2xl w-4/5 text-primary">subscribe</span>
          </button>
        </form>
      </div>

      <div className="md:my-8 mt-10">
        <h1 className="text-4xl font-bold text-white ">socials</h1>
        <ul className="mt-2 flex gap-2">
          <img
            className="cursor-pointer hover:rotate-45 duration-200 w-14"
            src={twitterLogo}
            alt=""
          />
          <img
            className="cursor-pointer hover:rotate-180  duration-200"
            src={pinterestLogo}
            alt=""
          />
          <img
            className="cursor-pointer hover:-rotate-45 duration-200 w-14"
            src={instaLogo}
            alt=""
          />
        </ul>
      </div>
    </div>
  );
};

export default Footer;
