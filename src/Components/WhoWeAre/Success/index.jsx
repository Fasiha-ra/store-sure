import React from 'react'
import { SuccessWrap } from './Success.styles'

const Success = () => {
    const data =[
        {
            number:"321 M+",
            title:"Order Fulfilled"
        },
        {
            number:"100K+",
            title:"Clint Served"
        },
        {
            number:"25K",
            title:"Store Authorized"
        }
    ]
  return (
    <SuccessWrap>
       <div className="container">
       <strong className="heading">Our Success</strong>
       <div className="cards">
        {data.map((val,ind)=>(
            <div className="card" key={ind}>
                <strong className="num">{val.number}</strong>
                <span className="title">{val.title}</span>
            </div>
        ))}
       </div>
       </div>
    </SuccessWrap>
  )
}

export default Success