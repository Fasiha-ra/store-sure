import React from "react";
import { OnsStopWrap } from "./OneStop.styles";
import tick from "../../../images/home/tick.svg";
import videos from "../../../images/home/videos.png";
const OneStop = () => {
    const data= [
        {
            list:"Warehousing"
        },
        
        {
            list:"Order Fulfilment"
        },
        {
            list:"Product Sourcing"
        },
        {
            list:"Shipping"
        },
        {
            list:"Logistics"
        },
        {
            list:"Packaging"
        },
        {
            list:"Labeling "
        },
        {
            list:"Other Services"
        },

    ]
  return (
    <OnsStopWrap>
      <div className="container">
        <strong className="heading">
          Your One-Stop Solution for
          <span className="colored"> Warehouse & Logistics</span>
        </strong>
        <div className="StopHolder">
            <ul>
              {data.map((val,ind)=>(
                  <li key={ind}><img src={tick} alt="tick" />{val.list}</li>
              ))}
            </ul>
            <img src={videos} alt="videos" className="vid"/>
        </div>
      </div>
    </OnsStopWrap>
  );
};

export default OneStop;
