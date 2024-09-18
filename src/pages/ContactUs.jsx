import React from 'react'
import Hero from '../Components/Integration/Hero'
import hero from "../images/contact/hero.png";
import Contact from '../Components/ContactUs';
import Locations from '../Components/ContactUs/locations';
const ContactUs = () => {
  return (
    <>
    <Hero heading="Contact us" bg={hero}/>
    <Contact/>
    <Locations/>
    </>
  )
}

export default ContactUs