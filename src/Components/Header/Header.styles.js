import styled, { css } from "styled-components";

export const HeaderWrapper = styled.header`
  width: 100%;
  padding: 40px 20px;
  position: relative;
  z-index: 999;
  @media screen and (max-width: 991px) {
    padding: 10px 15px;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    background-color: var(--white);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 5px 0px;
  }
  @media (min-width: 768px) and (max-width: 1440px) {
    padding: 10px 15px;
  }
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    gap: 30px;
    @media screen and (max-width: 992px) {
      padding: 0 10px;
    }
  }
  .hamburgerWrapper {
    width: 36px;
    height: 29px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--white);
    border-radius: 82px;
    cursor: pointer;
    @media screen and (min-width: 992px) {
      display: none;
    }
  }
`;

export const LogoWrap = styled.div`
  min-width: 100px;
  @media screen and (max-width: 768px) {
    max-width: 120px;
  }
  img {
    max-width: 100%;
    height: auto;
  }
  @media (min-width: 992px) and (max-width: 1440px) {
    max-width: 130px;
  }
`;

export const NavigationWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
  @media screen and (max-width: 991px) {
    display: block;
    position: absolute;
    transition: 0.3s all ease-in-out;
    margin-top: 10px;
    top: 91px;
    max-height: 0px;
    left: 0;
    right: 0;
    padding: 5px;
    border-radius: 0px;
    background: rgba(20, 20, 22, 1);
    opacity: 0;
    overflow: hidden;

    ${({ $navActive }) =>
      $navActive &&
      css`
        top: 52px;
        max-height: 1000px;
        visibility: visible;
        opacity: 1;
        padding: 50px 100px;
        position: fixed;
        width: 100%;
      `}
  }
`;

export const NavHolder = styled.ul`
  max-width: 540px;
  padding: 3px;
  border-radius: 82px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  @media screen and (max-width: 991px) {
    display: block;
    padding-bottom: 20px;
    background: transparent;
    max-width: 100%;
  }
  @media (min-width: 992px) and (max-width: 1200px) {
    margin-left: auto;
    max-width: 460px;
  }
  @media (min-width: 1200px) and (max-width: 1440px) {
    max-width: 460px;
  }
  @media (min-width: 1441px) and (max-width: 1600px) {
    margin-left: 40px;
    max-width: 510px;
    @media (min-width: 1500px) and (max-width: 1600px) {
      margin-left: 60px;
    }
  }
  @media (min-width: 1601px) and (max-width: 2540px) {
    margin-left: 100px;
  }
`;

export const NavLinks = styled.li`
  color: var(--fonts-color);
  border-radius: 72px;
  text-align: center;
  @media screen and (max-width: 991px) {
    margin-bottom: 10px;
  }
  a {
    color: var(--fonts-color);
  }
  &:hover {
    background-color: var(--light-primay);
  }
  &.active a {
    background-color: red; /* Set background color to red when active */
    padding: 10px;
    border-radius: 10px;
  }

  a {
    color: var(--fonts-color);
    font-size: 18px;
    line-height: 30px;
    font-weight: 400;
    position: relative;
    transition: background-color 0.4s ease-in-out; /* Only apply to background-color */
    padding: 10px;
    @media (min-width: 992px) and (max-width: 1440px) {
      font-size: 16px;
    }
    color: var(--white);
    @media (min-width: 992px) {
      color: var(--fonts-color);
    }
    &:hover {
      background-color: var(--light-primay);
      padding: 10px;
      border-radius: 10px;
    }
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-left: auto;
  gap: 15px;
  flex-direction: column;
  align-items: center;
  @media (min-width: 576px) {
    flex-direction: row;
  }
  @media (min-width: 1720px) {
    padding-right: 20px;
  }
  button {
    width: 133px;
    @media (min-width: 992px) {
      margin: 0 auto;
    }
  }
  .bt-signup {
    margin-left: 10px;
  }
`;
