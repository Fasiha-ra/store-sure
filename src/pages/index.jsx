import React from "react";
import Hero from "../Components/Integration/Hero";
import hero from "../images/home/hero.png";
import LocalExpert from "../Components/Home/LocalExperts";
import OneStop from "../Components/Home/OneStop";

const Home = () => {
  return (
    <>
      <Hero
        heading="Warehousing Services in Türkiye"
        para="Managing your goods to ensure seamless operations and timely delivery"
        bg={hero}
      />
      <LocalExpert />
      <OneStop />
    </>
  );
};

export default Home;
