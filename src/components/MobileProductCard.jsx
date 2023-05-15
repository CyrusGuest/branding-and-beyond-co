import React from "react";
import { Link } from "react-router-dom";
import piechart from "../../images/piechart.svg";
import brand from "../../images/brand.svg";

const ProductCard = ({ topCard }) => {
  if (topCard) {
    return (
      <div className="font-Poppins glow-on-hover text-white md:mx-auto md:my-2 md:w-9/12 w-11/12 py-6 px-6 flex gradient-background rounded-lg drop-shadow-lg mt-14">
        <img className="w-1/5 mx-auto md:max-w-xs" src={piechart} />

        <div className="ml-5 max-w-lg">
          <h3 className="font-bold">Ad Integration</h3>
          <p>
            Enable your website with ads to monetize your content and introduce
            new cash-flow to your business.
          </p>

          <div className="flex gap-2">
            <h1 className="text-xl mt-4">
              <span className="font-bold">$1,999.99/mo</span> or
            </h1>

            <Link
              to="/contactus"
              className="mt-2 glow-on-hover-transparent flex mx-0 py-0 text-black mobile-btn bg-white"
            >
              <span className="gradient-text">get quote</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="font-Poppins glow-on-hover text-white md:mx-auto md:ml-32 md:my-2 md:w-9/12 w-11/12 py-6 px-6 flex reverse-gradient-background rounded-lg shadow-lg mt-14">
      <div className="ml-5 max-w-md">
        <h3 className="font-bold">Brand Management</h3>
        <p>
          Allow us to create, manage, and market your business' brand for you.
          As experts in the business, we deliver modern and tailored marketing
          solutions to our clients.
        </p>

        <div className="flex gap-2">
          <h1 className="text-xl mt-4">
            <span className="font-bold">$2,499.99/mo</span> or
          </h1>

          <Link
            to="/contactus"
            className="mt-2 glow-on-hover-transparent flex mx-0 py-0 text-black mobile-btn bg-white"
          >
            <span className="gradient-text">get quote</span>
          </Link>
        </div>
      </div>

      <img className="w-1/5 mx-auto md:max-w-xs" src={brand} />
    </div>
  );
};

export default ProductCard;
