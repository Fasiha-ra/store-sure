import styled from "styled-components";
export const SliderContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  overflow: hidden;
  text-align: center;
  .slider-wrapp {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .heading {
    margin-bottom: 30px;
  }
`;
export const Trust = styled.div`
  overflow: hidden;
  

  .slick-slider {
    width: 100%;
  }
  .carousel-slider {
    transition: transform 1s ease-in-out;
  }

  .carousel-slider.playing {
    transition: none;
  }
  .slick-track {
    display: flex;
    align-items: center;
    gap: 70px;
    animation: scroll 50s linear infinite;
    @media screen and (max-width: 1440px) {
      gap: calc(30px + (70 - 30) * (100vw - 390px) / (1440 - 390));
    }
  }
  @keyframes scroll {
    0% {
      transform: ${({ $ti }) => ($ti ? $ti : "translateX(0px)")};
    }
    100% {
      transform: ${({ $tf }) => ($tf ? $tf : "translateX(-1920px)")};
    }
  }
`;
export const SliderWrapper = styled.div`
  max-width: 120px;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    max-width: 169px;
    padding: 20px 0;
  }
`;
export const SliderImage = styled.img`
  /* width: 100%; */
  height: 100%;
  max-width: 120px;
  @media screen and (min-width: 768px) {
    max-width: 169px;
  }
  
`;
