import React from 'react'
import { LocationsWrap } from './Locations.styles'
import { BsTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
const Locations = () => {
    const data = [
        {
            title:"+1012 3456 789",
            icon: <BsTelephoneFill />
        },
        {
            title:"Storesures@gmail.com",
            icon:  <MdEmail />
        },
        {
            title:"132 Mersin, 02156 Turkey",
            icon:   <FaLocationDot />
        },
    ]
  return (
    <LocationsWrap>
        <div className="container">
        <div className="card">
               <ul>
                {data.map((val,ind)=>(
                    <li key={ind}><Link to="/">{val.icon}
                    <span>{val.title}</span></Link>
                    </li>
                ))}
               </ul>
        </div>
        </div>
    </LocationsWrap>
  )
}

export default Locations