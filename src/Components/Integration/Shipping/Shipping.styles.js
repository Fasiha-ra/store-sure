import styled from "styled-components";
export const ShippingWrap = styled.div`
margin-bottom: 50px;
  .wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    max-width: 650px;
    margin: 0 auto 30px;
    @media (min-width: 768px){
        justify-content: space-between;
    }
  }
  .shippingholder {
    display: flex;
    .icon_wrap {
        cursor: pointer;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .icon {
        margin-bottom: 10px;
        img {
          width: 42px;
          height: 42px;
          @media (min-width: 768px){
            width: 67px;
          height: 67px;
          }
        }
      }
      .text {
        font-size: 14px;
        line-height: 18px;
        font-weight: 600;
        display: block;
      }
    }
  }
  .img{
    width: 100%;
    margin: 0 auto;
    max-width: 1100px;
  }
`;
