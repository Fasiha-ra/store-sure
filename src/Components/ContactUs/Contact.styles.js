import styled from "styled-components";
import contact from "../../images/contact/contact.png";
export const ContactWrap = styled.div`
  text-align: center;
  margin-bottom: 30px;
  @media (min-width: 992px) {
    margin-bottom: 50px;
  }
  a{
    color: var(--white);
  }
  .container {
    .heading {
      margin-bottom: 30px;
    }
    p {
      font-size: 16px;
      line-height: 20px;
      font-weight: 500;
      color: #717171;
      @media (min-width: 992px) {
        font-size: 18px;
        line-height: 22px;
      }
    }
    .wraps {
      display: flex;
      gap: 20px;
      align-items: center;
      justify-content: space-between;
      flex-direction: column;
      border-radius: 11px;
      padding: 10px;
      background-color: var(--white);
      box-shadow: 2px 2px 40px 2px rgba(0, 0, 0, 0.1);
      @media (min-width: 992px){
        flex-direction: row;
      }
      .imgWrap {
        padding: 50px 40px 40px;
        color: var(--white);
        background-image: url(${contact});
        background-position: center;
        background-size: cover;
        width: 100%;
        max-width: 554px;
        min-height: 600px;
        border-radius: 11px;
        img{
          width: 100%;
          height: auto;
        }
        .textWrap{
          text-align: left;
          font-weight: 400;
          font-size: 16px; 
          line-height: 20px;
          @media (min-width: 992px){
            font-size: 20px; 
            line-height: 24px;
          }
          .title{
            font-weight: 600;
            font-size: 22px; 
            line-height: 26px;
            display: block;
            margin-bottom: 15px;
            @media (min-width: 992px){
              font-size: 30px; 
              line-height: 34px;
          }
          }
          p{
            color: #C9C9C9;
            margin-bottom: 100px;
          }
        }
        .contactus{
          margin-bottom: 180px;
          .flex{
            display: flex;
            gap: 20px;
            align-items: center;
            margin-bottom: 50px;
            span{
              font-size: 17px; 
              line-height: 21px;
              font-weight: 400;
            }
          }
        }
        .social{
          display: flex;
          gap: 20px;
          align-items: center;
          justify-content: start;
          .icon{
            padding: 5px 5px 2px;
            color: var(--black);
            background-color: var(--white);
            border-radius: 50%;
          }
        }
      }
    }
  }
  .formWrap{
    width: 100%;
    @media (min-width: 992px){
    margin-right: 30px;}
  }
`;
