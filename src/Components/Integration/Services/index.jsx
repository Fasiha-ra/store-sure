import React from "react";
import { ServiceWrap } from "./Services.styles";
import php from "../../../images/integration/php.png";
import js from "../../../images/integration/js.png";
import node from "../../../images/integration/node.png";
import http from "../../../images/integration/http.png";
import python from "../../../images/integration/python.png";
const Services = () => {
    const imgData = [
        {imag:python},
        {imag:php},
        {imag:http},
        {imag:js},
        {imag:node},
    ]
  return (
    <ServiceWrap>
      <div className="container">
        <div className="textWrap">
          <strong className="heading">Services powered by our API</strong>
          <p>
            If you are going to build your own applications and your requirement
            is bulk SMS, Branded SMS, masked SMS and you need a super-fast
            response and better grip in your application then our PHP rest
            API is very advance and good.
          </p>
        </div>
        <div className="imgHolders">
            {imgData.map((item, index)=>(
                <div className="imgWrap" key={index}>
                    <img src={item.imag} alt="items" />
                </div>
            ))}
        </div>
      </div>
    </ServiceWrap>
  );
};

export default Services;
