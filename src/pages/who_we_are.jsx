import React from 'react'
import Hero from '../Components/Integration/Hero'
import hero from "../images/whoweare/hero.png"
import ServiceArea from '../Components/WhoWeAre/ServiceArea'
const WhoeWeAre = () => {
  return (
   <>
   <Hero heading="About StoreSures" bg={hero}/>
   <ServiceArea/>
   </>
  )
}

export default WhoeWeAre