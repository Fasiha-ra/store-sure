import styled from "styled-components";
export const SuccessWrap = styled.div`
  margin-bottom: 30px;
  text-align: center;
  @media (min-width: 992px) {
    margin-bottom: 50px;
  }
  .heading {
    margin-bottom: 35px;
  }
  .cards {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(1, 1fr);
    @media (min-width: 576px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
    }
    .card {
      background: linear-gradient(
        180deg,
        #033026 0%,
        rgba(3, 48, 38, 0.2) 100%
      );
      padding: 40px 30px;
      border-radius: 6px;
      .num {
        font-size: 30px;
        line-height: 34px;
        color: var(--white);
        font-weight: 600;
        display: block;
        margin-bottom: 25px;
        @media (min-width: 768px) {
          font-size: 40px;
          line-height: 44px;
        }
        @media (min-width: 992px) {
          font-size: 59px;
          line-height: 63px;
        }
      }
      .title {
        font-size: 18px;
        line-height: 22px;
        font-weight: 600;
        display: block;
        @media (min-width: 992px){
            font-size: 22px;
        line-height: 26px; 
        }
      }
    }
  }
`;
