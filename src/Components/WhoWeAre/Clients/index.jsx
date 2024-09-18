import React from "react";
import { ClientWrap } from "./Clients.styles";
import client1 from "../../../images/whoweare/client1.png";
import client2 from "../../../images/whoweare/client2.png";
import client3 from "../../../images/whoweare/client3.png";
import client4 from "../../../images/whoweare/client4.png";
import client5 from "../../../images/whoweare/client5.png";
import client6 from "../../../images/whoweare/client6.png";
const Clients = () => {
  const data = [
    { img: client1 },
    { img: client2 },
    { img: client3 },
    { img: client4 },
    { img: client5 },
    { img: client6 },
    { img: client1 },
    { img: client1 },
    { img: client2 },
    { img: client3 },
    { img: client4 },
    { img: client5 },
    { img: client6 },
    { img: client1 },
    { img: client1 },
    { img: client2 },
    { img: client3 },
    { img: client4 },
    { img: client5 },
    { img: client6 },
    { img: client1 },
  ];
  return (
    <ClientWrap>
      <div className="container">
        <div className="textWrap">
          <strong className="title">Our Clients</strong>
          <span className="subtitle">
            We have been working with some Fortune 500+ clients
          </span>
        </div>
        <div className="imgHolder">
          {data.map((item, ind) => (
            <div className="imgWrap" key={ind}>
              <img src={item.img} alt="clients" />
            </div>
          ))}
        </div>
      </div>
    </ClientWrap>
  );
};

export default Clients;
