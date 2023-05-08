import React from "react";
import customerIcon from "../../images/customer-icon.svg";

const MobileReviewCard = () => {
  return (
    <div className="font-Poppins w-4/5 py-10 px-4 bg-brand-primary rounded-lg mx-auto mt-20 mb-28 drop-shadow-lg md:hidden lg:hidden">
      <img className="w-3/5 mx-auto" src={customerIcon} />
      <p className="dark:text-brand-secondary text-white text-center text-xl leading-10 pt-8">
        “They brought me so many customers and completely refreshed my business'
        brand identity.” - anonymous customer
      </p>
    </div>
  );
};

export default MobileReviewCard;
