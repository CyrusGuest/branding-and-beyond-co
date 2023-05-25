import React from "react";
import jadedPrints from "../../images/jadedprints.png";
import flowerShop from "../../images/flowershop.png";
import coffeeShop from "../../images/coffeeshop.png";

const BarCarousel = () => {
  return (
    <div className="w-full bg-primary pt-8 pb-16 h-64">
      <h2 className="text-center text-white text-2xl font-bold">Trusted by</h2>
      <div className="flex justify-center gap-12 mt-6">
        <img
          src={jadedPrints}
          className="h-20 md:h-24 cursor-pointer hover:h-28 duration-200"
        />
        <img
          src={flowerShop}
          className="h-20 md:h-24 cursor-pointer hover:h-28 duration-200"
        />
        <img
          src={coffeeShop}
          className="h-20 md:h-24 cursor-pointer hover:h-28 duration-200"
        />
      </div>
    </div>
  );
};

export default BarCarousel;
