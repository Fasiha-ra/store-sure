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
    <Trust
      
      $ti={ti}
      $tf={tf}
     
    >
      <SliderContainer>
        <div className="slider-wrapp">
          <Slider {...settings}>
            <SliderWrapper>
              <SliderImage src={playstore} alt="playstore" />
            </SliderWrapper>
            <SliderWrapper>
              <SliderImage src={wordpress} alt="wordpress" />
            </SliderWrapper>
            <SliderWrapper>
              <SliderImage src={daraz} alt="daraz" />
            </SliderWrapper>
            <SliderWrapper>
              <SliderImage src={stripe} alt="stripe" />
            </SliderWrapper>
            <SliderWrapper>
              <SliderImage src={shopify} alt="shopify" />
            </SliderWrapper>
            <SliderWrapper>
              <SliderImage src={ebay} alt="ebay" />
            </SliderWrapper>
            <SliderWrapper>
              <SliderImage src={allexpress} alt="allexpress" />
            </SliderWrapper>
            <SliderWrapper>
              <SliderImage src={client1} alt="client1" />
            </SliderWrapper>
            <SliderWrapper>
              <SliderImage src={walmat} alt="walmat" />
            </SliderWrapper>
            <SliderWrapper>
              <SliderImage src={client2} alt="client2" />
            </SliderWrapper>
            <SliderWrapper>
              <SliderImage src={playstore} alt="playstore" />
            </SliderWrapper>
            <SliderWrapper>
              <SliderImage src={wordpress} alt="wordpress" />
            </SliderWrapper>
            <SliderWrapper>
              <SliderImage src={daraz} alt="daraz" />
            </SliderWrapper>
            <SliderWrapper>
              <SliderImage src={stripe} alt="stripe" />
            </SliderWrapper>
            
          </Slider>
        </div>
      </SliderContainer>
    </Trust>
  );
};

export default Platform;
