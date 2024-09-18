import React, { useState } from "react";
import Button from "../../Button/index"
import {
  FormContainer,
  InputGroup,
  Label,
  Input,
  RadioButtonGroup,
  RadioButton,
  TextArea,
} from "./ContactForm.styles";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    subject: "General Inquiry",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        subject: "General Inquiry",
        message: "",
      });
    
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <InputGroup>
        <Label>First Name</Label>
        <Input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </InputGroup>
      <InputGroup>
        <Label>Last Name</Label>
        <Input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </InputGroup>
      <InputGroup>
        <Label>Email</Label>
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </InputGroup>
      <InputGroup>
        <Label>Phone Number</Label>
        <Input
          type="number"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
      </InputGroup>

      <RadioButtonGroup>
        <Label>Select Subject?</Label>
        <div className="radiobtn">
          {["General Inquiry", "Support", "Feedback", "Other"].map(
            (subject) => (
              <RadioButton key={subject}>
                <input
                  type="radio"
                  name="subject"
                  value={subject}
                  checked={formData.subject === subject}
                  onChange={handleChange}
                />
                <span>{subject}</span>
              </RadioButton>
            )
          )}
        </div>
      </RadioButtonGroup>

      <div className="textares"><InputGroup>
        <Label>Message</Label>
        <TextArea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Write your message.."
        />
      </InputGroup></div>

    <div className="btn">  <Button type="primary" width="237px">Submit</Button></div>
    </FormContainer>
  );
};

export default ContactForm;
