import React from "react";
import pinterestLogo from "../../images/white/pinterest.svg";
import twitterLogo from "../../images/white/twitter.svg";
import instaLogo from "../../images/white/insta.svg";

const BarCarousel = () => {
  return (
    <div className="w-full gradient-background pt-8 pb-16 h-64">
      <h2 className="text-center text-white text-2xl font-bold">Trusted by</h2>
      <div className="flex justify-center gap-12 mt-6">
        <img
          src={pinterestLogo}
          className="h-24 cursor-pointer hover:h-28 duration-200"
        />
        <img
          src={twitterLogo}
          className="h-24 cursor-pointer hover:h-28 duration-200"
        />
        <img
          src={instaLogo}
          className="h-24 cursor-pointer hover:h-28 duration-200"
        />
      </div>
    </div>
  );
};

export default BarCarousel;
