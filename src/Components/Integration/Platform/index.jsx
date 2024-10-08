import React from "react";
import {
  SliderContainer,
  SliderImage,
  SliderWrapper,
  Trust,
} from "./Platform.styles";

import allexpress from "../../../images/integration/allexpress.png";
import client1 from "../../../images/integration/client1.png";
import client2 from "../../../images/integration/client2.png";
import daraz from "../../../images/integration/daraz.png";
import ebay from "../../../images/integration/ebay.png";
import playstore from "../../../images/integration/playstore.png";
import shopify from "../../../images/integration/shopify.png";
import stripe from "../../../images/integration/stripe.png";
import walmat from "../../../images/integration/walmat.png";
import wordpress from "../../../images/integration/wordpress.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const platforms = [
  { src: playstore, alt: "playstore" },
  { src: wordpress, alt: "wordpress" },
  { src: daraz, alt: "daraz" },
  { src: stripe, alt: "stripe" },
  { src: shopify, alt: "shopify" },
  { src: ebay, alt: "ebay" },
  { src: allexpress, alt: "allexpress" },
  { src: client1, alt: "client1" },
  { src: walmat, alt: "walmat" },
  { src: client2, alt: "client2" },
];

const Platform = ({ ti, tf }) => {
  const settings = {
    slidesToShow: 10,
    slidesToScroll: 2,
    speed: 500,
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <Trust $ti={ti} $tf={tf}>
      <SliderContainer>
        <strong className="heading">The platforms work with us</strong>
        <div className="slider-wrapp">
          <Slider {...settings}>
            {platforms.map((platform, index) => (
              <SliderWrapper key={index}>
                <SliderImage src={platform.src} alt={platform.alt} />
              </SliderWrapper>
            ))}
          </Slider>
        </div>
      </SliderContainer>
    </Trust>
  );
};

export default Platform;
