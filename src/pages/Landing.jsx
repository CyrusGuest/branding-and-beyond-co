import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import MobileNav from "../components/MobileNav";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Explore from "../components/Explore";
import DesktopExplore from "../components/DesktopExplore";
import Footer from "../components/Footer";
import BarCarousel from "../components/BarCarousel";

const Landing = () => {
  let { MobileNavOpen } = useContext(AppContext);

  return (
    <div className="font-Poppin transition-all">
      {MobileNavOpen ? <MobileNav /> : ""}

      <div className={MobileNavOpen ? "opacity-50" : "opacity-100"}>
        <Navbar />

        <Hero />

        <BarCarousel />

        <Explore />

        <DesktopExplore />

        <Footer />
      </div>
    </div>
  );
};

export default Landing;
