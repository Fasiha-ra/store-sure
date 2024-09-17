import React from 'react'
import Services from '../Components/Integration/Services'
import Platform from '../Components/Integration/Platform'
import IntegrationApp from '../Components/Integration/IntegrationApp'
import Shipping from '../Components/Integration/Shipping'
import Hero from '../Components/Integration/Hero'
import hero from "../images/integration/hero.png";
const Integration = () => {
  return (
    <>
    <Hero heading="Integration Benefits" bg={hero}/>
    <Platform/>
    <IntegrationApp/>
    <Services/>
    <Shipping/>
    </>
  )
}

export default Integration