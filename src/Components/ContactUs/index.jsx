import React from "react";
import { ContactWrap } from "./Contact.styles";
import contact from "../../images/contact/contact.png";
import { BsTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import ContactForm from "./contactForm";
import { Link } from "react-router-dom";



const Contact = () => {
  return (
    <ContactWrap>
      <div className="container">
        <strong className="heading">Contact Us</strong>
        <p>Any question or remarks? Just write us a message!</p>
        <div className="wraps">
          <div className="imgWrap">
            {/* <img src={contact} alt="contact" /> */}
            <div className="textWrap">
              <strong className="title">Contact Information</strong>
              <p>Fill the form </p>
              <div className="contactus">
                <Link to="/"  className="flex">
                <BsTelephoneFill />
                  <span>+1012 3456 789</span>
                </Link>
                <Link to="/"  className="flex">
                <MdEmail />
                  <span>Storesures@gmail.com</span>
                </Link>
                <Link to="/"  className="flex">
                <FaLocationDot />
                  <span>132 Mersin, 02156 Turkey</span>
                </Link>
              </div>
              <div className="social">
                <Link to="/" className="icon"><FaTwitter />
                </Link>
                <Link to="/"  className="icon"><FaInstagram />
                </Link>
                <Link to="/"  className="icon"><FaTwitter />
                </Link>
              </div>
            </div>
          </div>
          <div className="formWrap">
            <ContactForm/>
          </div>
        </div>
      </div>
    </ContactWrap>
  );
};

export default Contact;
