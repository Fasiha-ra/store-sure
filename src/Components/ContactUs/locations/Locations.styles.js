import styled from "styled-components";
export const LocationsWrap = styled.div`
  margin-bottom: 50px;
  .card {
    ul {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 10px;
      @media (min-width: 576px){
        gap: 20px;
      }
      li {
        font-size: 25px;
        background-color: var(--white);
        box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.1);
        padding: 45px 30px;
        @media (max-width: 624px) {
          width: 100%;
          font-size: 20px;
        }
        a {
          align-items: center;
          gap: 10px;
          display: flex;
          @media (min-width: 576px){
        gap: 30px;
      }
        }
        span {
          font-size: 18px;
          line-height: 22px;
          font-weight: 400;
        }
      }
    }
  }
`;
