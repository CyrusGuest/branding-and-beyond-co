import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";
import MobileNav from "../components/MobileNav";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PackageCard from "../components/PackageCard";
import CodeGraphic from "../../images/codegraphic.svg";

const Packages = () => {
  let { MobileNavOpen } = useContext(AppContext);

  return (
    <div className="font-Poppin dark:bg-brand-secondary transition-all">
      {MobileNavOpen ? <MobileNav /> : ""}

      <div className={MobileNavOpen ? "opacity-50" : "opacity-100"}>
        <Navbar />

        <h1 className="text-center text-5xl gradient-text font-bold mt-20">
          Our Packages
        </h1>

        <p className="text-center mx-auto text-slate-600 max-w-md md:max-w-2xl mt-2">
          Welcome to our Packages page, where we've curated a selection of
          digital solutions tailored to meet your unique needs.
        </p>

        <div className="flex flex-wrap justify-center max-w-6xl mx-auto gap-y-12 my-20">
          <PackageCard packageType="basic" />
          <PackageCard packageType="premium" />
          <PackageCard packageType="standard" />
        </div>

        <div className="my-36 flex flex-col lg:flex-row-reverse gap-16">
          <img className="mx-auto md:w-[500px]" src={CodeGraphic} />

          <div className="lg:ml-20 flex flex-col justify-center">
            <h1 className="text-center text-5xl gradient-text font-bold mt-10">
              Code-To-Customers
            </h1>

            <p className="text-center mx-auto text-slate-600 max-w-md md:max-w-2xl mt-2 md:mt-6 md:text-xl">
              In today's digital-first world, a strong online presence isn't
              just a nice-to-have—it's a business necessity. With{" "}
              <span className="font-bold">over 76% of consumers</span> checking
              out a business online before visiting in person or making a
              purchase, having a modern, well-crafted website is more crucial
              than ever.
            </p>

            <p className="text-center mx-auto text-slate-600 max-w-md md:max-w-2xl mt-2 md:mt-6 md:text-xl">
              But it's more than just aesthetics. An{" "}
              <span className="font-bold">SEO-optimized website</span> ensures
              you're found by the right people at the right time—those actively
              searching for the products or services you offer. This not only
              boosts your visibility but also drives qualified traffic to your
              site, increasing the likelihood of conversion.
            </p>

            <p className="text-center mx-auto text-slate-600 max-w-md md:max-w-2xl mt-2 md:mt-6 md:text-xl">
              Investing in a robust digital presence is investing in your
              business's future. With our{" "}
              <span className="font-bold">Code-to-Customers</span> approach, we
              aim to bridge the gap between a great website and tangible
              business growth. Together, we can turn your website into your most
              powerful sales tool.
            </p>

            <Link
              to="/casestudies"
              className="text-center mobile-btn w-72 font-bold gradient-background rounded-lg shadow-lg text-white glow-on-hover mt-10 text-2xl mx-auto"
            >
              Learn More
            </Link>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Packages;
