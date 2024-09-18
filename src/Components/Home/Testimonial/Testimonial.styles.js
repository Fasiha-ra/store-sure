import styled from "styled-components";
export const TestimonialWrap = styled.div`
  margin-bottom: 30px;
  @media (min-width: 992px) {
    margin-bottom: 50px;
  }
  .slick-slider {
    width: 100%;
    .carousel-slider {
      transition: transform 1s ease-in-out;
    }
    .carousel-slider.playing {
      transition: none;
    }
    .slick-track {
      padding: 20px 0;
      display: flex;
      justify-content: flex-end;
    }
    .slick-slide {
      transition: transform 0.3s linear;
      display: flex;
      justify-content: center;
      padding: 0 15px 0 0;
    }
  }
  .cards {
    .card {
      background: #fbfbfb;
      padding: 20px;
      .imgWrap {
        display: flex;
        gap: 20px;
        align-items: center;
        margin-bottom: 20px;
        span {
          display: block;
        }
        .title {
          font-size: 24px;
          line-height: 28px;
          font-weight: 700;
        }
        .subtitle {
          font-size: 16px;
          line-height: 20px;
          font-weight: 400;
        }
        figure {
          img {
            border-radius: 50%;
            width: 75px;
            height: 75px;
          }
        }
      }
      .stars{
        display: flex;
        justify-content: center;
      }
      .star {
        display: inline-flex;
        justify-content: center;
        background: #263238;
        padding: 10px;
        border-radius: 6px;
        img {
          width: 109px;
          margin: 0 auto;
        }
      }
    }
  }
`;
