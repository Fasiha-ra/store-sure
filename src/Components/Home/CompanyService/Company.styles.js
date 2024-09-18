import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
`;

export const Card = styled.div`
  opacity: 0;
  visibility: hidden;
  transform: translateY(70px);
  transition: 0.5s all ease-in-out;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
  &.in-view {
    transform: translateY(0px);
    opacity: 1;
    visibility: visible;
  }
  .imgs {
    max-width: 50%;
    height: auto;
    margin:0 auto 20px;
    @media (max-width: 768px) {
      max-width: 100%;
      margin-bottom: 0;
    }
  }
  .buttonImg{
    display: flex;
    gap: 10px;
    
  justify-content: center;
  @media (min-width: 768px){
    justify-content: start;
  }
  img{
    width: 100px;
  }
  }
`;

export const Image = styled.img`
  width: 100%;
  /* width: 550px; */
  /* height: 350px; */
`;

export const TextContainer = styled.div`
  max-width: 50%;
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
  @media (max-width: 768px) {
    max-width: 100%;
    text-align: center;
    font-size: 16px;
    line-height: 20px;
  }
  .heading {
    margin-bottom: 30px;
  }
`;
