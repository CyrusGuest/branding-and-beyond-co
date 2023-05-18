import React from "react";
import { Link } from "react-router-dom";
import MainGraphic from "../../images/maingraphic.svg";

const Hero = () => {
  return (
    <div>
      <h1 className="md:max-w-2xl max-w-md mx-auto mt-20 md:mt-28 text-center text-5xl md:text-6xl font-bold gradient-text">
        your one-stop-shop for everything advertising related
      </h1>
      <h3 className="leading-10 mt-8 md:max-w-2xl max-w-md mx-auto text-2xl text-[#999999] text-center">
        The <span className="gradient-text font-bold">one-stop-shop</span> for
        comprehensive digital development solutions.
      </h3>
      <div className="flex justify-center mt-10 space-x-6">
        <Link to="/packages">
          <button className="text-2xl mobile-btn text-white gradient-background glow-on-hover">
            our packages
          </button>
        </Link>
        <Link to="/contactus" className="mt-3">
          <span className="text-2xl mobile-btn glow-on-hover-transparent shadow-lg gradient-text">
            contact us
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
