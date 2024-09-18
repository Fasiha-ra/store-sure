import styled from "styled-components";
export const VisionWrap = styled.div`
  margin-bottom: 30px;
  @media (min-width: 992px) {
    margin-bottom: 50px;
  }
  .textWrap {
    text-align: center;
    color: #717171;
    font-size: 16px;
    line-height: 20px;
    font-weight: 400;
    margin-bottom: 15px;
    .heading {
      color: #284445;
      margin-bottom: 35px;
      text-align: center;
    }
    p {
      @media (min-width: 768px){
        text-align: start;
      }
    }
  }
`;
