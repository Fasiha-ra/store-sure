import React from "react";
import { VisionWrap } from "./Vision.styles";

const Vision = () => {
  const data = [
    {
      heading: "Vision",
      para: "To be the global leader in logistics, warehousing, and supply chain solutions, empowering businesses to thrive through innovation, reliability, and unmatched service excellence. We envision a future where our comprehensive solutions drive seamless operations for our clients, enabling them to reach ",
    },
    {
      heading: "Misson",
      para: "Our mission is to provide innovative, customer-centric logistics and supply chain solutions that deliver exceptional value and efficiency. We are dedicated to leveraging advanced technology, sustainable practices, and a passionate team to ensure the secure and timely delivery of goods, while ",
    },
  ];
  return (
    <VisionWrap>
      <div className="container">
       {data.map((val,ind)=>(
        <div className="textWrap" key={ind}>
        <strong className="heading">{val.heading}</strong>
        <p>"{val.para}"</p>
        </div>
       ))}
      </div>
    </VisionWrap>
  );
};

export default Vision;
