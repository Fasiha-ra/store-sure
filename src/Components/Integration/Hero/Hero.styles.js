import styled from "styled-components";
import hero from "../../../images/integration/hero.png";
export const HeroWrap =styled.div`
background: var(--light-gray);
.imgwrap {
  position: relative;
  background-image: url(${hero}) ;
  background-size: cover;
  height: 400px; /* Adjust as needed */
  width: 100%;
  background-position: center;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(188.68deg, #033026 3.71%, rgba(3, 48, 38, 0.2) 93.78%);
  opacity: 0.5; /* Adjust opacity as needed */
  z-index: 1;
}

.content {
  position: relative;
  z-index: 2;
}

`;