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

        <h1 className="text-gradient text-center text-5xl text-primary font-bold mt-20">
          Our Packages
        </h1>

        <p className="text-center mx-auto text-slate-600 max-w-sm md:max-w-2xl mt-2">
          Welcome to our Packages page, where we've curated a selection of
          digital solutions tailored to meet your unique needs.
        </p>

        <div className="flex flex-wrap justify-center max-w-6xl mx-auto gap-y-12 my-20">
          <PackageCard packageType="basic" />
          <PackageCard packageType="premium" />
          <PackageCard packageType="standard" />
        </div>

        <div className="mb-36 mt-36 flex flex-col lg:flex-row-reverse gap-8 lg:gap-16">
          <img
            className="mx-auto w-4/5 lg:w-2/5 max-w-4xl lg:mt-20 lg:mb-40 flex"
            src={CodeGraphic}
          />

          <div className="lg:ml-20 flex flex-col justify-center items-center">
            <h1 className="text-center text-4xl md:text-5xl text-gradient font-bold">
              Code-To-Customers
            </h1>

            <div className="max-w-xs md:max-w-2xl mt-4">
              <p className="text-center mx-auto mt-2 md:mt-6 md:text-xl">
                In today's digital-first world, a strong online presence isn't
                just a nice-to-have—it's a business necessity. With{" "}
                <span className="font-bold text-gradient">
                  over 76% of consumers
                </span>{" "}
                checking out a business online before visiting in person or
                making a purchase, having a modern, well-crafted website is more
                crucial than ever.
              </p>

              <p className="text-center mx-auto mt-2 md:mt-6 md:text-xl">
                But it's more than just aesthetics. An{" "}
                <span className="font-bold text-gradient">
                  SEO-optimized website
                </span>{" "}
                ensures you're found by the right people at the right time—those
                actively searching for the products or services you offer. This
                not only boosts your visibility but also drives qualified
                traffic to your site, increasing the likelihood of conversion.
              </p>

              <p className="text-center mx-auto mt-2 md:mt-6 md:text-xl">
                Investing in a robust digital presence is investing in your
                business's future. With our{" "}
                <span className="font-bold text-gradient">
                  Code-to-Customers
                </span>{" "}
                approach, we aim to bridge the gap between a great website and
                tangible business growth. Together, we can turn your website
                into your most powerful sales tool.
              </p>
            </div>

            <Link
              to="/getstarted"
              className="text-center btn w-72 font-bold bg-primary rounded-lg shadow-lg text-white glow-on-hover mt-10 text-2xl mx-auto"
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
