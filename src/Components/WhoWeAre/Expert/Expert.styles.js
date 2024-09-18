import styled from "styled-components";
export const ExpertWrap = styled.div`
  margin-bottom: 30px;
  text-align: center;
  @media (min-width: 992px) {
    margin-bottom: 50px;
  }
  .heading {
    margin-bottom: 35px;
  }
  .cards {
    /* display: grid; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    /* grid-template-columns: repeat(3, 1fr);
    @media (min-width: 1200px){
      grid-template-columns: repeat(4, 1fr);
    } */
    .card {
      margin: 0 auto;
      border: 1px solid #c4c4c4;
      box-shadow:1px 1px 4px 0px rgba(0, 0, 0, 0.2);
      border-radius: 7px;
      img {
        max-width: 288px;
        min-height: 300px;
      }
      .icons {
        ul {
          padding-top: 20px;
          display: flex;
          justify-content: center;
          gap: 10px;
          @media (min-width: 768px) {
            gap: 15px;
          }
          li {
            background-color: rgba(81, 171, 59, 0.1);
            padding: 10px 10px 5px;
            border-radius: 50%;
            font-size: 20px;
            transition: all 0.3s ease-in;
            a {
              color: #51ab3b;
            }
            &:hover {
              background-color: var(--light-green);
              a {
                color: var(--black);
              }
            }
          }
        }
      }
      .textWrap {
        padding: 20px;
        .designation {
          color: #51ab3b;
          display: block;
          font-weight: 500;
          font-size: 16px;
          line-height: 20px;
          margin-bottom: 10px;
        }
        .name {
          display: block;
          color: #454545;
          font-size: 25px;
          line-height: 29px;
          font-weight: 500;
        }
      }
    }
  }
`;
