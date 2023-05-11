import React from "react";
import { Link } from "react-router-dom";
import MobileProductCard from "./MobileProductCard";

const Explore = () => {
  return (
    <div className="pt-20 pl-3 pb-20 md:hidden">
      <h1 className="text-5xl leading-relaxed gradient-text mr-4">
        Explore all the different advertising and brand services we offer.
      </h1>
      <h3 className="text-3xl leading-relaxed text-[#999999] mr-16 mt-8">
        Social media,{" "}
        <span className="gradient-text font-bold">brand identity</span>,
        advertisement, and more! We've got it all.
      </h3>

      <Link to="/packages">
        <button className="text-2xl mobile-btn mt-8 text-white gradient-background glow-on-hover bg-white">
          view more packages
        </button>
      </Link>

      <MobileProductCard />
    </div>
  );
};

export default Explore;
