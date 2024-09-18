import styled from "styled-components";
import map from "../../../images/home/map.png";
export const LocalExpertWrap = styled.div`
  background-image: url(${map});
  background-position: center;
  /* background-size: cover; */
  background-repeat: no-repeat;
  margin-bottom: 30px;
  text-align: center;
  @media (min-width: 576px) {
    padding: 40px 0;
  }
  @media (min-width: 992px) {
    margin-bottom: 50px;
  }
  .container {
    max-width: 873px;

    .heading {
      margin-bottom: 35px;
    }
  }
`;
