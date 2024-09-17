import React from 'react'
import { HeroWrap } from './Hero.styles'
import Form from '../../Form'

const Hero = ({heading, bg}) => {
  return (
    <HeroWrap $bg={bg}>
        <div className="container">
           <div className="imgwrap">
           <div className="overlay"></div>
           <h1 className="content">{heading}</h1>
           <div className="form"><Form/></div>
           </div>
        </div>
    </HeroWrap>
  )
}

export default Hero