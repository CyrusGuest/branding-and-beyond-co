import React from "react";
import { Link } from "react-router-dom";
import DataImage from "../../images/data.svg";

const DataGraphic = () => {
  return (
    <div className="mb-36 mt-20 lg:mt-36 flex flex-col lg:flex-row-reverse gap-8 lg:gap-16">
      <img
        className="mx-auto w-4/5 lg:w-3/5 max-w-2xl lg:mt-20 lg:mb-40 flex"
        src={DataImage}
      />

      <div className="lg:ml-20 flex flex-col justify-center items-center">
        <h1 className="text-center text-4xl md:text-5xl text-gradient font-bold">
          Data-Driven Decisions
        </h1>

        <div className="max-w-xs md:max-w-2xl mt-4">
          <p className="text-center mx-auto mt-2 md:mt-6 md:text-xl">
            In today's business landscape, a robust digital presence is not just
            an advantage—it's a necessity. According to a 2021 survey by
            TechJury, companies that utilize data-driven decision making have{" "}
            <span className="text-gradient font-bold">
              5-6% higher productivity rates
            </span>{" "}
            than their counterparts. Thus, a data-informed website and digital
            presence help businesses understand audience behavior, shape digital
            strategies, and personalize user experiences, leading to increased
            engagement and conversions.
          </p>

          <p className="text-center mx-auto mt-2 md:mt-6 md:text-xl">
            Harnessing data for decision making also impacts SEO and social
            media strategies. Reports show that businesses using SEO see a{" "}
            <span className="font-bold text-gradient">
              14.6% conversion rate
            </span>
            , compared to 1.7% for traditional outbound methods. Similarly,
            social media analytics allow businesses to fine-tune content and
            engage with audiences in real time, with marketers who use social
            media data seeing a 5x return on investment compared to those who
            don't.
          </p>

          <p className="text-center mx-auto mt-2 md:mt-6 md:text-xl">
            In the e-commerce sphere, integrating data analytics with sales
            platforms is also crucial. It's reported that businesses using data
            analytics have seen a{" "}
            <span className="font-bold text-gradient">20-30% increase</span> in
            e-commerce sales. Therefore, in this digitally-driven era,
            businesses that embrace data for their online presence are poised
            for success, making smarter, more informed decisions that drive
            growth.
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
  );
};

export default DataGraphic;
