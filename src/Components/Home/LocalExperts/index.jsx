import React from "react";
import { LocalExpertWrap } from "./LocalExpert.styles";

const LocalExpert = () => {
  return (
    <LocalExpertWrap>
      <div className="container">
        <strong className="heading">
          Local Experts for Your IT Supply Chain in
          <span className="colored"> Turkey</span>
        </strong>
        <p>
          With a strong presence in Turkey and a network of trade-licensed
          entities across 170 countries, Store Sure Warehouse proudly serves the
          Tech, Medical, Automotive, and Aviation industries. Store Sure
          Warehouse offers a comprehensive range of IT supply chain solutions,
          including Importer of Record (IOR), Exporter of Record (EOR), DDP
          Delivery Service, and white glove deliveries to clients worldwide. Our
          team of international IT trade experts is available around the clock
          to support all your IT supply chain needs. Leveraging our extensive
          experience, we ensure quick first-time clearance for our clients.
          While you focus on exploring new markets and expanding your
          operations, Store Sure Warehouse handles zero-end-user involvement
          deliveries, providing seamless and efficient service across Turkey.
        </p>
      </div>
    </LocalExpertWrap>
  );
};

export default LocalExpert;
