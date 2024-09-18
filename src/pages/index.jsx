import React from "react";
import Hero from "../Components/Integration/Hero";
import hero from "../images/home/hero.png";
import LocalExpert from "../Components/Home/LocalExperts";
import OneStop from "../Components/Home/OneStop";
import Partners from "../Components/Home/Partners";
import CompnayService from "../Components/Home/CompanyService";
import CompanyService from "../Components/Home/CompanyService";
import Consultation from "../Components/Home/Consultation";
import Register from "../Components/Home/Register";
import Testimonial from "../Components/Home/Testimonial";
import Videos from "../Components/Home/Videos";

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
      <CompanyService/>
      <Consultation/>
      <Register/>
      <Testimonial/>
      <Videos/>
      <Partners/>
    </>
  );
};

export default Home;
