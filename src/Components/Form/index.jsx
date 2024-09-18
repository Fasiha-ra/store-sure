import React from "react";
import { FormWrap } from "./Form.styles";
import TextField from "../TextField/TextField";
import Button from "../Button";

const Form = () => {
  return (
    <FormWrap>
      <TextField
        className="input-field"
        field_Name="text"
        type="text"
        placeholder="Full Name"
      />
      <div className="fieldwrap">
        <TextField
          className="input-field"
          field_Name="text"
          type="email"
          placeholder="Email"
        />
        <TextField
          className="input-field"
          field_Name="text"
          type="number"
          placeholder="Phone No"
        />
      </div>
      <TextField
      variant = "textarea"
        className="input-field"
        field_Name="text"
        type="text"
        placeholder="Shipment Details"
      />
      <TextField
        className="input-field"
        field_Name="text"
        type="text"
        placeholder="How did you hear about us?"
      />
   <div className="btn">
   <Button type="primary">Submit</Button>
   </div>
    </FormWrap>
  );
};

export default Form;
