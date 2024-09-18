import React from 'react'
import { LocationWrap } from './Location.styles'
import mersin from "../../../images/whoweare/mersin.png";
import lahore from "../../../images/whoweare/lahore.png";
const Location = () => {
    const data =[
        {
            img:mersin,
            title:"Mersin, Turkey"
        },
        {
            img:lahore,
            title:"Lahore, Pakistan"
        }
    ]
  return (
    <LocationWrap>
        <div className="container">
            <strong className="heading">
                Our Locations
            </strong>
            <div className="cards">
                {data.map((val,ind)=>(
                    <div className="card" key={ind}>
                        <img src={val.img} alt={val.title} />
                        <strong className="title">{val.title}</strong>
                    </div>
                ))}
            </div>
        </div>
    </LocationWrap>
  )
}

export default Location