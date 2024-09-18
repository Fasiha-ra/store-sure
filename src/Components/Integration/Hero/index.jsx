import React from 'react'
import { HeroWrap } from './Hero.styles'
import Form from '../../Form'

const Hero = ({heading, bg, para}) => {
  return (
    <HeroWrap $bg={bg}>
        <div className="container">
           <div className="imgwrap">
           <div className="overlay"></div>
          <div className="textwrap">
          <h1 className="content">{heading}</h1>
          <p>{para}</p>
          </div>
           <div className="form"><Form/></div>
           </div>
        </div>
    </HeroWrap>
  )
}

export default Hero