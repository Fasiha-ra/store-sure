import React from "react";
import {
  SliderContainer,
  SliderImage,
  SliderWrapper,
  Trust,
} from "./Partner.styles";

import asus from "../../../images/home/asus.png";
import cisco from "../../../images/home/cisco.png";
import honeywell from "../../../images/home/honeywell.png";
import juniper from "../../../images/home/juniper.png";
import link from "../../../images/home/link.png";
import siemens from "../../../images/home/siemens.png";
import hp from "../../../images/home/hp.png";
import intel from "../../../images/home/intel.png";
import bar from "../../../images/home/bar.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const platforms = [
  { src: siemens, alt: "siemens" },
  { src:juniper, alt: "juniper" },
  { src: asus, alt: "asus" },
  { src: cisco, alt: "cisco" },
  { src: intel, alt: "intel" },
  { src: hp, alt: "hp" },
  { src: bar, alt: "bar" },
  { src: link, alt: "link" },
  { src: honeywell, alt: "honeywell" },
];

const Partners = ({ ti, tf }) => {
  const settings = {
    slidesToShow: 7,
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
        <strong className="heading">Our Partners</strong>
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

export default Partners;
