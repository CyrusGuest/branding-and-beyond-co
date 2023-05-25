import React from "react";
import { Link } from "react-router-dom";
import MainGraphic from "../../images/maingraphic.svg";

const LandingGraphic = () => {
  return (
    <div className="mb-36 mt-20 md:mt-28 lg:mt-60 flex flex-col-reverse lg:flex-row-reverse gap-8 lg:gap-16">
      <div className="lg:mr-20 flex flex-col justify-center items-center">
        <h1 className="text-center text-4xl md:text-5xl text-gradient font-bold">
          Code-To-Customers
        </h1>

        <div className="max-w-xs md:max-w-2xl mt-4">
          <p className="text-center mx-auto mt-2 md:mt-6 md:text-xl">
            In today's digital-first world, a strong online presence isn't just
            a nice-to-have—it's a business necessity. With{" "}
            <span className="font-bold text-gradient">
              over 76% of consumers
            </span>{" "}
            checking out a business online before visiting in person or making a
            purchase, having a modern, well-crafted website is more crucial than
            ever.
          </p>

          <p className="text-center mx-auto mt-2 md:mt-6 md:text-xl">
            But it's more than just aesthetics. An{" "}
            <span className="font-bold text-gradient">
              SEO-optimized website
            </span>{" "}
            ensures you're found by the right people at the right time—those
            actively searching for the products or services you offer. This not
            only boosts your visibility but also drives qualified traffic to
            your site, increasing the likelihood of conversion.
          </p>

          <p className="text-center mx-auto mt-2 md:mt-6 md:text-xl">
            Investing in a robust digital presence is investing in your
            business's future. With our{" "}
            <span className="font-bold text-gradient">Code-to-Customers</span>{" "}
            approach, we aim to bridge the gap between a great website and
            tangible business growth. Together, we can turn your website into
            your most powerful sales tool.
          </p>
        </div>

        <Link
          to="/getstarted"
          className="text-center btn xxw-72 font-bold bg-primary rounded-lg shadow-lg text-white glow-on-hover mt-10 text-2xl mx-auto"
        >
          Learn More
        </Link>
      </div>

      <img
        className="mx-auto w-4/5 lg:w-3/5 max-w-4xl lg:mt-20 lg:mb-40 flex"
        src={MainGraphic}
      />
    </div>
  );
};

export default LandingGraphic;
