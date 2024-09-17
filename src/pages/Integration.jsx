import React from 'react'
import Services from '../Components/Integration/Services'
import Platform from '../Components/Integration/Platform'
import IntegrationApp from '../Components/Integration/IntegrationApp'
import Shipping from '../Components/Integration/Shipping'
import Hero from '../Components/Integration/Hero'

const Integration = () => {
  return (
    <>
    <Hero/>
    <Platform/>
    <IntegrationApp/>
    <Services/>
    <Shipping/>
    </>
  )
}

export default Integration