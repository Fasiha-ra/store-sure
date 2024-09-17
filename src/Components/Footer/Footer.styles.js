import styled from "styled-components";
import hero from "../../images/footer/footerBG.png";
export const FooterWrap = styled.div`

position: relative;
  background-image: url(${hero});
  background-position: center;
  background-size: cover;
  color: var(--white);
  .container{
    padding-top: 50px;
  }
  .row {
    border-bottom: 3px solid #224c4a;
    padding: 40px 30px;
    display: flex;
    justify-content: space-between;
    align-items: start;
    flex-wrap: wrap;
    gap: 20px;
    .footerCol {
      .icons {
        ul {
          padding-top: 20px;
          display: flex;
          gap: 10px;
          @media (min-width: 768px){
            gap: 15px;
          }
          li {
            background-color: #264f4d;
            padding: 10px 10px 5px;
            border-radius: 50%;
            font-size: 20px;
            transition: all .3s ease-in;
            &:hover{
                background-color: var(--light-green); 
              a{
                color  :var(--black) ;
              }
            }
          }
        }
      }
      .title{
        font-size: 20px; 
        line-height: 24px;
        font-weight: 400;
        display: block;
      }
      .inputfield{
        padding: 20px 0;
        position: relative;
        input{
            width: 100%;
            position: relative;
            padding:10px;
            background-color: #3c6160;
            color: var(--white);
            border: none;
            outline: none;
            border-radius: 8px;
            &::placeholder{
                color: var(--white);
            }
        }
        img{
            position: absolute;
            top: 32px;
            bottom: 0;
            right: 10px;
        }
      }
      li {
        padding: 20px 0 0;
        transition: all ease 0.3s;
        font-size: 14px;
        line-height: 18px;
        a {
          color: var(--white);
          &:hover{
            color: var(--light-green);
            transform: translateX(10px);
        }
        }
      }
    }
  }
  .row2{
    justify-content: space-evenly !important;
    .imgwrap{
        max-width: 98px;
        min-height: 40px;
        img{
            width: 100%;
            height: auto;
        }
    }
  }
  .para{
    text-align: center;
    padding: 30px 0 50px;
  }
  .arrow{
    cursor: pointer;
    width: 62px;
    height: 62px;
    position: absolute;
    top: 10px;
    right: 10px;
  }
`;
