import styled from "styled-components";
export const ClientWrap = styled.div`
  margin-bottom: 30px;
  text-align: center;
  @media (min-width: 992px) {
    margin-bottom: 50px;
  }
  .container {
    max-width: 1152px;
    .textWrap {
      margin-bottom: 30px;
      .title {
        font-size: 22px;
        line-height: 24px;
        font-weight: 600;
        display: block;
        color: #4d4d4d;
        margin-bottom: 10px;
        @media (min-width: 768px){
            font-size: 28px;
            line-height: 32px;
        }
        @media (min-width: 992px){
            font-size: 36px;
        line-height: 40px; 
        }
      }
      .subtitle {
        color: #717171;
        font-size: 16px;
        line-height: 20px;
        display: block;
      }
    }
    .imgHolder {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      @media (min-width: 576px) {
        grid-template-columns: repeat(5, 1fr);
      }
      @media (min-width: 768px) {
        grid-template-columns: repeat(7, 1fr);
      }
      .imgWrap {
        margin: 0 auto;
        img {
          width: 48px;
          height: 48px;
        }
      }
    }
  }
`;
