import React from "react";
import Service from "../Service";
import {
  faPenNib,
  faCode,
  faMagnifyingGlass,
  faCopyright,
  faChartSimple,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";

const ServicesSection = ({ setSection }) => {
  return (
    <div className="hidden md:flex flex-col">
      <h1 className="text-3xl font-bold text-center mt-20 mb-1">
        We'd love to <span className="text-gradient">collaborate</span>! Let us
        know what you're after.
      </h1>

      <p className="text-center text-gray-500 mb-16">
        Just click any of the services below to select it. Once you're done,
        click continue.
      </p>

      <div className="grid gap-4 grid-rows-3 grid-cols-2 md:grid-rows-2 md:grid-cols-3 mx-auto">
        <Service
          icon={faPenNib}
          title="Website design"
          description="I need a website design."
        />
        <Service
          icon={faCode}
          title="Website development"
          description="I need a website built."
        />
        <Service
          icon={faMagnifyingGlass}
          title="SEO Optimization"
          description="Help me grow organically."
        />
        <Service
          icon={faCopyright}
          title="Brand management"
          description="I want to grow my socials."
        />
        <Service
          icon={faChartSimple}
          title="Analytics & Reporting"
          description="I need data."
        />
        <Service
          icon={faHeadset}
          title="24/7 Support"
          description="We're here to help!"
        />
      </div>

      <button
        onClick={() => setSection(1)}
        className="btn mt-10 mb-32 text-xl w-60 bg-primary text-white mx-auto text-center"
      >
        Continue
      </button>

      <div className="flex mx-auto gap-4">
        <div className="w-16 h-2 bg-accent rounded-lg"></div>
        <div className="w-8 h-2 bg-gray-200 rounded-lg"></div>
      </div>
    </div>
  );
};

export default ServicesSection;
