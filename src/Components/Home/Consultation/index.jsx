import React from 'react'
import { ConsultationWrap } from './Consultation.styles'
import Button from '../../Button'

const Consultation = () => {
  return (
    <ConsultationWrap>
        <div className="container">
            <strong className="title"> Schedule Free Consultation With <span className="colored">Our Experts</span> </strong>
            <Button type="primary" width="193px">Book your Session</Button>
        </div>
    </ConsultationWrap>
  )
}

export default Consultation