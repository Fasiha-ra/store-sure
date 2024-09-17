import React from "react";
import { FooterWrap } from "./Footer.styles";
import { Link } from "react-router-dom";
import logo from "../../../src/images/footer/footerlogo.png";
import inputicon from "../../../src/images/footer/inputicon.svg";
import { FaDribbble } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import stripe from "../../images/footer/stripe.png";
import paypal from "../../images/footer/paypal.png";
import card from "../../images/footer/card.png";
import visa from "../../images/footer/visa.png";
import arrow from "../../images/footer/arrow.png";
const Footer = () => {
  const currentDate= new Date();
  const currentYear = currentDate.getFullYear();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };
  return (
    <FooterWrap>
      <div className="arrow" onClick={scrollToTop}>
        <img src={arrow} alt="arrow" />
      </div>
      <div className="container">
        <div className="row row1">
          <div className="logowrap footerCol">
            <div className="logoHolder">
              <div className="logo">
                <Link href="/" prefetch={false}>
                  <img src={logo} alt="logo" />
                </Link>
              </div>
              <ul className="listed">
                <li>
                  <Link to="/">Copyright © {currentYear} storesure</Link>
                </li>
                <li>
                  <Link to="/">All rights reserved</Link>
                </li>
              </ul>
              <div className="icons">
                <ul>
                  <li>
                    <Link to="/">
                      <FaInstagram />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FaDribbble />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FaTwitter />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FaYoutube />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footerCol">
            <strong className="title">Company</strong>
            <ul>
              <li>
                <Link to="/">About us</Link>
              </li>
              <li>
                <Link to="/">Blog</Link>
              </li>
              <li>
                <Link to="/">Contact us</Link>
              </li>
              <li>
                <Link to="/">Pricing</Link>
              </li>
              <li>
                <Link to="/">Testimonials</Link>
              </li>
            </ul>
          </div>
          <div className="footerCol">
            <strong className="title">Support</strong>
            <ul>
              <li>
                <Link to="/">Help Center</Link>
              </li>
              <li>
                <Link to="/">Terms of service</Link>
              </li>
              <li>
                <Link to="/">Legal</Link>
              </li>
              <li>
                <Link to="/">Privacy policy</Link>
              </li>
              <li>
                <Link to="/">Status</Link>
              </li>
            </ul>
          </div>
          <div className="footerCol">
            <strong className="title">Stay up to date</strong>
            <div className="inputfield">
              <input type="text" placeholder="Your email address" />
              <img src={inputicon} alt="input icon" />
            </div>
            <strong className="title">Email Address</strong>
            <ul>
              <li>
                <Link to="/">info@storesures.com</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="row row2">
        <div className="footerCol">
            <strong className="title">Sales Support</strong>
            <ul>
              <li>
                <Link href="tel:+31 85-145285145">+31 85-145285145</Link>
              </li>
             
            </ul>
          </div>
          <div className="footerCol">
            <strong className="title">Sales Support</strong>
            <ul>
              <li>
                <Link href="tel:+31 85-145285145">+31 85-145285145</Link>
              </li>
             
            </ul>
          </div>
          <div className="footerCol">
            <strong className="title">Sales Support</strong>
            <ul>
              <li>
                <Link href="tel:+31 85-145285145">+31 85-145285145</Link>
              </li>
             
            </ul>
          </div>
          <div className="footerCol">
            <strong className="title">Sales Support</strong>
            <ul>
              <li>
                <Link href="tel:+31 85-145285145">+31 85-145285145</Link>
              </li>
             
            </ul>
          </div>
        </div>
        <div className="row row2">
          <div className="imgwrap">
          <Link>
          <img src={stripe} alt="stripe" />
          </Link>
          </div>
          <div className="imgwrap">
          <Link>
          <img src={paypal} alt="paypal" />
          </Link>
          </div>
          <div className="imgwrap">
          <Link>
          <img src={card} alt="card" />
          </Link>
          </div>
          <div className="imgwrap">
          <Link>
          <img src={visa} alt="visa" />
          </Link>
          </div>
        </div>
        <div className="para">
          <p>Copyright © {currentYear} storesure</p>
        </div>
      </div>
    </FooterWrap>
  );
};

export default Footer;
