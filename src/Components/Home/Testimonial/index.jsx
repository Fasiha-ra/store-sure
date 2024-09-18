import React from "react";
import { TestimonialWrap } from "./Testimonial.styles";
import testimonial from "../../../images/home/testimonial.png";
import star from "../../../images/home/stars.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Testimonial = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 6500,
    autoplaySpeed: 0.001,
    cssEase: "linear",
    // pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 3.1,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2.8,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2.2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1.8,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1.1,
        },
      },
      {
        breakpoint: 475,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const data = [
    {
      img: testimonial,
      name: "Arsalan",
      designation: "Business Owner",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur commodo tellus vel malesuada consectetur. Donec elementum neque non justo sollicitudin, vitae scelerisque est pharetra. Suspendisse sed turpis ornare, elementum lacus in, consequat erat. Proin velit tortor, mollis vitae sodales quis, cursus et nisl. Sed non porta odio, ac mollis nisi. Praesent porttitor tincidunt dapibus.",
    },
    {
      img: testimonial,
      name: "Arsalan",
      designation: "Business Owner",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur commodo tellus vel malesuada consectetur. Donec elementum neque non justo sollicitudin, vitae scelerisque est pharetra. Suspendisse sed turpis ornare, elementum lacus in, consequat erat. Proin velit tortor, mollis vitae sodales quis, cursus et nisl. Sed non porta odio, ac mollis nisi. Praesent porttitor tincidunt dapibus.",
    },
    {
      img: testimonial,
      name: "Arsalan",
      designation: "Business Owner",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur commodo tellus vel malesuada consectetur. Donec elementum neque non justo sollicitudin, vitae scelerisque est pharetra. Suspendisse sed turpis ornare, elementum lacus in, consequat erat. Proin velit tortor, mollis vitae sodales quis, cursus et nisl. Sed non porta odio, ac mollis nisi. Praesent porttitor tincidunt dapibus.",
    },
    {
      img: testimonial,
      name: "Arsalan",
      designation: "Business Owner",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur commodo tellus vel malesuada consectetur. Donec elementum neque non justo sollicitudin, vitae scelerisque est pharetra. Suspendisse sed turpis ornare, elementum lacus in, consequat erat. Proin velit tortor, mollis vitae sodales quis, cursus et nisl. Sed non porta odio, ac mollis nisi. Praesent porttitor tincidunt dapibus.",
    },
    {
      img: testimonial,
      name: "Arsalan",
      designation: "Business Owner",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur commodo tellus vel malesuada consectetur. Donec elementum neque non justo sollicitudin, vitae scelerisque est pharetra. Suspendisse sed turpis ornare, elementum lacus in, consequat erat. Proin velit tortor, mollis vitae sodales quis, cursus et nisl. Sed non porta odio, ac mollis nisi. Praesent porttitor tincidunt dapibus.",
    },
    {
      img: testimonial,
      name: "Arsalan",
      designation: "Business Owner",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur commodo tellus vel malesuada consectetur. Donec elementum neque non justo sollicitudin, vitae scelerisque est pharetra. Suspendisse sed turpis ornare, elementum lacus in, consequat erat. Proin velit tortor, mollis vitae sodales quis, cursus et nisl. Sed non porta odio, ac mollis nisi. Praesent porttitor tincidunt dapibus.",
    },
    {
      img: testimonial,
      name: "Arsalan",
      designation: "Business Owner",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur commodo tellus vel malesuada consectetur. Donec elementum neque non justo sollicitudin, vitae scelerisque est pharetra. Suspendisse sed turpis ornare, elementum lacus in, consequat erat. Proin velit tortor, mollis vitae sodales quis, cursus et nisl. Sed non porta odio, ac mollis nisi. Praesent porttitor tincidunt dapibus.",
    },
  ];
  return (
    <TestimonialWrap>
    <div className="container">
    <div className="cards">
        <Slider {...settings}>
         {data.map((val,ind)=>(
             <div className="card" key={ind}>
             <div className="imgWrap">
               <figure>
                <img src={val.img} alt="testimonial" />
               </figure>
               <div className="txtWrap">
                 <span className="title">{val.name}</span>
                 <span className="subtitle">{val.designation}</span>
               </div>
             </div>
             <p>{val.para}</p>
            <div className="stars"> <div className="star">
                <img src={star} alt="star" />
             </div></div>
           </div>
         ))}
        </Slider>
      </div>
    </div>
    </TestimonialWrap>
  );
};

export default Testimonial;
