import styled from "styled-components";
export const ServiceWrap = styled.div`
  text-align: center;
  margin-bottom: 30px;
  @media (min-width: 992px) {
    margin-bottom: 50px;
  }
  .container {
    max-width: 1081px;
  }
  .headingWrap {
    margin-bottom: 20px;
    .subtitle {
      display: block;
      color: #51ab3b;
      font-size: 20px;
      line-height: 24px;
      font-weight: 500;
      @media (min-width: 992px) {
        font-size: 25px;
        line-height: 29px;
      }
    }
  }
  .cards {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(1, 1fr);
    @media (min-width: 576px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 992px) {
      grid-template-columns: repeat(3, 1fr);
    }
    .card {
      padding: 20px;
      background-color: var(--white);
      box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.3);
      .number {
        font-size: 30px;
        line-height: 34px;
        font-weight: 600;
        text-align: right;
        display: block;
        @media (min-width: 992px) {
          font-size: 52px;
          line-height: 56px;
        }
      }
      img {
        margin: 0 auto;
        max-width: 97px;
        width: 100%;
        min-height: 81px;
        height: auto;
        margin-bottom: 15px;
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
