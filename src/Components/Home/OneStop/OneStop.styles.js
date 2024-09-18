import styled from "styled-components";
export const OnsStopWrap = styled.div`
  margin-bottom: 30px;
  text-align: center;
  @media (min-width: 992px) {
    margin-bottom: 50px;
  }
  .container{
    max-width: 1150px;
    .heading{
        margin-bottom: 30px;
    }
  }
  .StopHolder {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    @media (min-width: 992px){
        flex-direction: row;
    }
    ul {
        display: grid;
        gap: 10px;
        grid-template-columns: repeat(2, 1fr);
        margin-bottom: 10px;
        @media (min-width: 768px){
            grid-template-columns: repeat(3, 1fr);
        }
        @media (min-width: 768px){
            grid-template-columns: repeat(4, 1fr);
        }
        @media (min-width: 992px){
            display: block;
        }
      li {
        
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 14px;
        line-height: 18px;
        font-weight: 600;
        @media (min-width: 576px){
            font-size: 17px;
            line-height: 21px;
       
        }
        @media (min-width: 992px){
            font-size: 23px;
        line-height: 27px;
        margin-bottom: 20px;
        }
      }
    }
    .vid{
        max-width: 700px;
        width: 100%;
        height: auto;
        min-height: 542px;
    }
  }
`;
