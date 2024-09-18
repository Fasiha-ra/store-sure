import React from 'react'
import { ServiceWrap } from './ServiceArea.styles'
import warehousing from "../../../images/whoweare/warehousing.svg";
import product from "../../../images/whoweare/product.svg";
import packaging from "../../../images/whoweare/packaging.svg";
import order from "../../../images/whoweare/order.svg";
import logistics from "../../../images/whoweare/logistics.svg";
import building from "../../../images/whoweare/building.svg";
const ServiceArea = () => {
  const data = [
    {
      img:warehousing,
      title:"Warehousing"
    },
    {
      img:order,
      title:"Order fulfilment"
    },
    {
      img:product,
      title:"Product Sourcing"
    },
    {
      img:logistics,
      title:"Shipping & Logistics "
    },
    {
      img:building,
      title:"Brand Building"
    },
    {
      img:packaging,
      title:"Packaging & Labeling"
    },
  ]
  return (
    <ServiceWrap>
      <div className="container">
        <div className="headingWrap">
          <span className="subtitle">What We Do</span>
          <strong className="h2">Our Services Area</strong>
        </div>
        <div className="cards">
          {data.map((val,inde)=>(
            <div className="card" key={inde}>
              <strong className="number">{inde+1}</strong>
              <img src={val.img} alt={val.title} />
              <strong className='title'>{val.title}</strong>
            </div>
          ))}
        </div>
      </div>
    </ServiceWrap>
  )
}

export default ServiceArea