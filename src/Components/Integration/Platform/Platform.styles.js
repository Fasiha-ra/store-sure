import styled, { css } from "styled-components";
export const SliderContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  overflow: hidden;

  .slider-wrapp {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
export const Trust = styled.div`
  overflow: hidden;
  /* background: ${({ $bg }) => ($bg ? $bg : "var(--white)")}; */
  /* box-shadow: ${({ $shadow }) => 
    $shadow ? "none" : "0px 0px 21px 0px #8E8E8E29"};
  ${({ $rounded }) =>
    $rounded &&
    css`
      border-radius: 40px;
      @media screen and (min-width: 768px) {
        border-radius: 60px;
      }
    `}*/

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
  max-width: 80px;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    max-width: 120px;
    padding: 20px 0;
  }
`;
export const SliderImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  max-width: 50px;
  min-height: 32px;
`;
