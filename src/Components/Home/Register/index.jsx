import React from 'react'
import { RegisterWrap } from './Register.styles'
import register from "../../../images/home/register.png";
const Register = () => {
  return (
    <RegisterWrap>
        <div className="container">
            <img src={register} alt="register" />
        </div>
    </RegisterWrap>
  )
}

export default Register