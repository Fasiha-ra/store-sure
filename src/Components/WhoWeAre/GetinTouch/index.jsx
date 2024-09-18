import React from "react";
import { GetWrapper } from "./GetinTouch.styles";
import laptop from "../../../images/whoweare/laptop.png";
import TextField from "../../TextField/TextField";
import Button from "../../Button";
const GetinTouch = () => {
  return (
    <GetWrapper>
      <div className="container">
        <div className="getWrap">
          <div className="formWrap">
            <strong className="heading">Get in touch with us</strong>
            <form action="">
              <div className="grid">
              <TextField
                className="input-field"
                field_Name="text"
                type="text"
                placeholder="Full Name"
              />
               <TextField
                className="input-field"
                field_Name="text"
                type="email"
                placeholder="Email"
              />
              </div>
               <TextField
                className="input-field"
                field_Name="text"
                type="text"
                placeholder="Select Service"
              />
               <TextField
                className="input-field"
                field_Name="text"
                type="text"
                placeholder="Special Request"
              />
              <div className="btn">
                <Button type="primary">Submit</Button>
              </div>
            </form>
          </div>
          <div className="imgWrap">
            <img src={laptop} alt="laptop" />
          </div>
        </div>
      </div>
    </GetWrapper>
  );
};

export default GetinTouch;
