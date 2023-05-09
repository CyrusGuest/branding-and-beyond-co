import React from "react";
import { Link } from "react-router-dom";
import vector1 from "../../images/vector1.svg";

const ProductCard = ({ topCard }) => {
  if (topCard) {
    return (
      <div className="font-Poppins glow-on-hover text-white md:mx-auto md:my-2 md:w-9/12 w-11/12 py-6 px-6 flex gradient-background dark:bg-brand-secondary dark:text-brand-primary rounded-lg drop-shadow-lg mt-14">
        <img className="w-2/5 mx-auto md:max-w-xs" src={vector1} />

        <div className="ml-5">
          <h3 className="font-bold">brand refresh</h3>
          <p>full rebrand and refresh</p>

          <button className="glow-on-hover-transparent flex mx-0 py-0 mt-2 text-black mobile-btn bg-white">
            <span className="gradient-text">get quote</span>
          </button>

          <p className="mt-2 text-xs">
            contact us today for an estimate on your refresh!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="font-Poppins glow-on-hover text-white md:mx-auto md:ml-32 md:my-2 md:w-9/12 w-11/12 py-6 px-6 flex reverse-gradient-background dark:bg-brand-secondary dark:text-brand-primary rounded-lg  drop-shadow-lg mt-14">
      <div className="ml-5">
        <h3 className="font-bold">brand refresh</h3>
        <p>full rebrand and refresh</p>

        <button className="glow-on-hover-transparent flex mx-0 py-0 mt-2 text-black mobile-btn bg-white">
          <span className="gradient-text">get quote</span>
        </button>

        <p className="mt-2 text-xs">
          contact us today for an estimate on your refresh!
        </p>
      </div>

      <img className="w-2/5 mx-auto md:max-w-xs" src={vector1} />
    </div>
  );
};

export default ProductCard;
