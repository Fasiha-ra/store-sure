import React from 'react'
import { ConsultationWrap } from './Consultation.styles'
import Button from '../../Button'
import { useNavigate } from 'react-router-dom'

const Consultation = () => {
  const navigate = useNavigate();
  const clickHandler = () =>{
  navigate("/contact-us")
    
  }
  return (
    <ConsultationWrap>
        <div className="container">
            <strong className="title"> Schedule Free Consultation With <span className="colored">Our Experts</span> </strong>
            <Button type="primary" width="193px" onClick={clickHandler}>Book your Session</Button>
        </div>
    </ConsultationWrap>
  )
}

export default Consultation