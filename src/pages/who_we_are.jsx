import React from 'react'
import Hero from '../Components/Integration/Hero'
import hero from "../images/whoweare/hero.png"
import ServiceArea from '../Components/WhoWeAre/ServiceArea'
import Vision from '../Components/WhoWeAre/Vision'
import Location from '../Components/WhoWeAre/Location'
import Success from '../Components/WhoWeAre/Success'
import Clients from '../Components/WhoWeAre/Clients'
import Expert from '../Components/WhoWeAre/Expert'
import GetinTouch from '../Components/WhoWeAre/GetinTouch'
const WhoeWeAre = () => {
  return (
   <>
   <Hero heading="About StoreSures" bg={hero}/>
   <ServiceArea/>
   <Vision/>
   <Location/>
   <Success/>
   <GetinTouch/>
   <Expert/>
   <Clients/>
   </>
  )
}

export default WhoeWeAre