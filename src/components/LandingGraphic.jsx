import React from "react";
import { Link } from "react-router-dom";
import MainGraphic from "../../images/maingraphic.svg";

const LandingGraphic = () => {
  return (
    <div className="my-36 flex flex-col-reverse lg:flex-row-reverse gap-16">
      <div className="lg:mr-20 flex flex-col justify-center">
        <h1 className="text-center text-5xl gradient-text font-bold mt-10">
          Code-To-Customers
        </h1>

        <p className="text-center mx-auto text-slate-600 max-w-md md:max-w-2xl mt-2 md:mt-6 md:text-xl">
          In today's digital-first world, a strong online presence isn't just a
          nice-to-have—it's a business necessity. With{" "}
          <span className="font-bold">over 76% of consumers</span> checking out
          a business online before visiting in person or making a purchase,
          having a modern, well-crafted website is more crucial than ever.
        </p>

        <p className="text-center mx-auto text-slate-600 max-w-md md:max-w-2xl mt-2 md:mt-6 md:text-xl">
          But it's more than just aesthetics. An{" "}
          <span className="font-bold">SEO-optimized website</span> ensures
          you're found by the right people at the right time—those actively
          searching for the products or services you offer. This not only boosts
          your visibility but also drives qualified traffic to your site,
          increasing the likelihood of conversion.
        </p>

        <p className="text-center mx-auto text-slate-600 max-w-md md:max-w-2xl mt-2 md:mt-6 md:text-xl">
          Investing in a robust digital presence is investing in your business's
          future. With our <span className="font-bold">Code-to-Customers</span>{" "}
          approach, we aim to bridge the gap between a great website and
          tangible business growth. Together, we can turn your website into your
          most powerful sales tool.
        </p>

        <Link
          to="/casestudies"
          className="text-center mobile-btn w-72 font-bold gradient-background rounded-lg shadow-lg text-white glow-on-hover mt-10 text-2xl mx-auto"
        >
          Learn More
        </Link>
      </div>

      <img
        className="mx-auto w-4/5 md:w-3/5 max-w-4xl md:mt-20 md:mb-40 flex"
        src={MainGraphic}
      />
    </div>
  );
};

export default LandingGraphic;
