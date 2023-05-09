import React from "react";
import nf3 from "../../images/examplework.png";

const DesktopReviewCard = () => {
  return (
    <div className="font-Poppins w-4/5 max-w-4xl bg-brand-primary rounded-lg mx-auto mt-20 mb-40 drop-shadow-lg flex">
      <img src={nf3} className="rounded-lg drop-shadow-lg" />
    </div>
  );
};

export default DesktopReviewCard;
