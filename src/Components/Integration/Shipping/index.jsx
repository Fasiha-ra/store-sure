import React, { useState } from "react";
import { ShippingWrap } from "./Shipping.styles";
import shippingicon from "../../../images/integration/shippingicon.svg";
import creditsicon from "../../../images/integration/creditsicon.svg";
import serviceicon from "../../../images/integration/serviceicon.svg";
import shipping from "../../../images/integration/shippingimg.png";
import shopapp from "../../../images/integration/shopapp.png";

const Shipping = () => {
  const data = [
    {
      icon: shippingicon,
      title: "Shipping",
      imag: shipping,
    },
    {
      icon: creditsicon,
      title: "Credits",
      imag: shopapp,
    },
    {
      icon: serviceicon,
      title: "Services",
      imag: shipping,
    },
  ];

 
  const [visibleImageIndex, setVisibleImageIndex] = useState(null);

 
  const handleImageClick = (index) => {
    setVisibleImageIndex(index);
  };

  
  const visibleImage = data[visibleImageIndex]?.imag;

  return (
    <ShippingWrap>
      <div className="container">
        <div className="wrap">
          {data.map((val, ind) => (
            <div className="shippingholder" key={ind} onClick={() => handleImageClick(ind)}>
              <div className="icon_wrap">
                <div className="icon">
                  <img src={val.icon} alt={val.title} />
                </div>
                <span className="text">{val.title}</span>
              </div>
            </div>
          ))}
        </div>
        {visibleImage && (
          <div className="img">
            <img src={visibleImage} alt="Selected" />
          </div>
        )}
      </div>
    </ShippingWrap>
  );
};

export default Shipping;
