import React from "react";
import Check from "../../images/checkmark.svg";
import { Link } from "react-router-dom";

const PackageCard = ({ packageType }) => {
  if (packageType === "basic") {
    return (
      <div className="shadow-lg flex flex-col p-6 w-80 mx-auto rounded-lg">
        <h4 className="text-xl text-primary">Basic</h4>
        <h2 className="mt-2 text-sm text-slate-600">
          <span className="text-primary font-bold text-4xl">$499</span> / month
        </h2>

        <p className="mt-2 text-slate-600">
          For most business that want a modern website
        </p>

        <div className="flex flex-col gap-3 mt-4 text-lg text-slate-600">
          <div className="flex">
            <img className="w-8 mr-2 opacity-80" src={Check} />
            <p>Modern Website</p>
          </div>

          <div className="flex">
            <img className="w-8 mr-2 opacity-80" src={Check} />
            <p>Source Code</p>
          </div>

          <div className="flex">
            <img className="w-8 mr-2 opacity-80" src={Check} />
            <p>AWS Hosting</p>
          </div>

          <div className="flex">
            <img className="w-8 mr-2 opacity-80" src={Check} />
            <p>SEO Optimized</p>
          </div>

          <div className="flex">
            <img className="w-8 mr-2 opacity-80" src={Check} />
            <p>Mobile Responsive</p>
          </div>

          <div className="flex">
            <img className="w-8 mr-2 opacity-80" src={Check} />
            <p>Clear Communication</p>
          </div>
        </div>

        <Link
          to="/getstarted"
          className="bg-primary btn text-center text-white font-bold rounded-lg shadow-lg py-3 mt-8 glow-on-hover"
        >
          Get Started
        </Link>
      </div>
    );
  }

  if (packageType === "standard") {
    return (
      <div className="shadow-lg flex flex-col p-6 w-80 mx-auto rounded-lg">
        <h4 className="text-xl text-primary">Standard</h4>
        <h2 className="mt-2 text-sm text-slate-600">
          <span className="text-primary font-bold text-4xl">$999</span> / month
        </h2>

        <p className="mt-2 text-slate-600">
          For most business that want a modern brand and website
        </p>

        <div className="flex flex-col gap-3 mt-4 text-lg text-slate-600">
          <div className="flex">
            <img className="w-8 mr-2 opacity-80" src={Check} />
            <p>E-Commerce Website</p>
          </div>

          <div className="flex">
            <img className="w-8 mr-2 opacity-80" src={Check} />
            <p>Digital Management</p>
          </div>

          <div className="flex">
            <img className="w-8 mr-2 opacity-80" src={Check} />
            <p>UX Design</p>
          </div>

          <div className="flex">
            <img className="w-8 mr-2 opacity-80" src={Check} />
            <p>Video Production</p>
          </div>

          <div className="flex">
            <img className="w-8 mr-2 opacity-80" src={Check} />
            <p>Email Marketing</p>
          </div>

          <div className="flex">
            <img className="w-8 mr-2 opacity-80" src={Check} />
            <p>Influencer Marketing</p>
          </div>
        </div>

        <Link
          to="/contactus"
          className="bg-primary btn text-center text-white font-bold rounded-lg shadow-lg py-3 mt-8 glow-on-hover"
        >
          Get Started
        </Link>
      </div>
    );
  }

  if (packageType === "premium") {
    return (
      <div className="shadow-lg flex flex-col p-6 w-80 mx-auto rounded-lg">
        <h4 className="text-xl text-primary">Premium</h4>
        <h2 className="mt-2 text-sm text-slate-600">
          <span className="text-primary font-bold text-4xl">$1999</span> / month
        </h2>

        <p className="mt-2 text-slate-600">
          For businesses that want it a modern website, brand, and advertising.
        </p>

        <div className="flex flex-col gap-3 mt-4 text-lg text-slate-600">
          <div className="flex">
            <img className="w-8 mr-2 opacity-80" src={Check} />
            <p>Modern Brand Strategy</p>
          </div>

          <div className="flex">
            <img className="w-8 mr-2 opacity-80" src={Check} />
            <p>Digital Advertising</p>
          </div>

          <div className="flex">
            <img className="w-8 mr-2 opacity-80" src={Check} />
            <p>Managed Social Media</p>
          </div>

          <div className="flex">
            <img className="w-8 mr-2 opacity-80" src={Check} />
            <p>Content Creation & Strategy</p>
          </div>

          <div className="flex">
            <img className="w-8 mr-2 opacity-80" src={Check} />
            <p>Analytics & Reporting</p>
          </div>

          <div className="flex">
            <img className="w-8 mr-2 opacity-80" src={Check} />
            <p>24/7 Support</p>
          </div>
        </div>

        <Link
          to="/contactus"
          className="bg-primary btn text-center text-white font-bold rounded-lg shadow-lg py-3 mt-8 glow-on-hover"
        >
          Get Started
        </Link>
      </div>
    );
  }
};

export default PackageCard;
