import React from "react";
import { ExpertWrap } from "./Expert.styles";
import expert from "../../../images/whoweare/expert.png";
import { FaDribbble } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
const Expert = () => {
  const data = [
    {
      img: expert,
      designation: "CEO & Founder",
      name: "Wade Warren",
    },
    {
      img: expert,
      designation: "Marketing",
      name: "Wade Warren",
    },
    {
      img: expert,
      designation: "Assistant",
      name: "Wade Warren",
    },
    {
      img: expert,
      designation: "Manger",
      name: "Wade Warren",
    },
  ];
  return (
    <ExpertWrap>
      <div className="container">
        <strong className="heading">Expert & Experienced Team</strong>
        <div className="cards">
          {data.map((val, ind) => (
            <div className="card" key={ind}>
              <img src={val.img} alt={val.designation} />
             <div className="textWrap">
             <span className="designation">{val.designation} </span>
              <strong className="name">{val.name} </strong>
              <div className="icons">
                <ul>
                  <li>
                    <Link to="/">
                      <FaInstagram />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FaDribbble />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FaTwitter />
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <FaYoutube />
                    </Link>
                  </li>
                </ul>
              </div>
             </div>
            </div>
          ))}
        </div>
      </div>
    </ExpertWrap>
  );
};

export default Expert;
