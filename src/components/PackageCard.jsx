import React from "react";
import Check from "../../images/checkmark.svg";

const PackageCard = ({ packageType }) => {
  if (packageType === "basic") {
    return (
      <div className="shadow-lg flex flex-col p-6 w-96 md:w-80 mx-auto rounded-lg">
        <h4 className="text-xl gradient-text">Basic</h4>
        <h2 className="mt-2 text-sm text-slate-600">
          <span className="gradient-text font-bold text-4xl">$499</span> / month
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

        <button className="gradient-background text-white font-bold rounded-lg shadow-lg py-3 mt-8 glow-on-hover">
          Get Started
        </button>
      </div>
    );
  }

  if (packageType === "standard") {
    return (
      <div className="shadow-lg flex flex-col p-6 w-96 md:w-80 mx-auto">
        <h4 className="text-xl gradient-text">Standard</h4>
        <h2 className="mt-2 text-sm text-slate-600">
          <span className="gradient-text font-bold text-4xl">$999</span> / month
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

        <button className="gradient-background text-white font-bold rounded-lg shadow-lg py-3 mt-8 glow-on-hover">
          Get Started
        </button>
      </div>
    );
  }

  if (packageType === "premium") {
    return (
      <div className="shadow-lg flex flex-col p-6 w-96 md:w-80 mx-auto">
        <h4 className="text-xl gradient-text">Premium</h4>
        <h2 className="mt-2 text-sm text-slate-600">
          <span className="gradient-text font-bold text-4xl">$1999</span> /
          month
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

        <button className="gradient-background text-white font-bold rounded-lg shadow-lg py-3 mt-8 glow-on-hover">
          Get Started
        </button>
      </div>
    );
  }
};

export default PackageCard;
