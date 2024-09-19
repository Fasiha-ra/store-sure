import React, { useState, useEffect } from "react";

import {
  ButtonWrap,
  HeaderWrapper,
  LogoWrap,
  NavHolder,
  NavigationWrap,
  NavLinks,
} from "./Header.styles";
import { navData } from "./Data";
import LogoImg from "../../images/header/logo.svg";
import hamburger from "../../images/header/hamburger.svg";
import { RxCross2 } from "react-icons/rx";

import Button from "../Button";
import { Link, useNavigate } from "react-router-dom";
const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const navigate = useNavigate();
  const clickHandler = () =>{
  navigate("/contact-us")
    
  }
  return (
    <>
      <HeaderWrapper $navActive={showNav}>
        <div className="container">
          <LogoWrap>
            <Link href="/">
              <img src={LogoImg} alt="Logo" className="logo" />
            </Link>
          </LogoWrap>
          <NavigationWrap $navActive={showNav}>
            <NavHolder>
              {navData.map((elem, ind) => (
                <NavLinks
                  key={ind}
                  //   $active={route == elem.link}
                  onClick={() => setShowNav(false)}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  <Link to={elem.link} prefetch={false}>
                    {elem.name}
                  </Link>
                </NavLinks>
              ))}
            </NavHolder>
            <ButtonWrap>
              <Button className="btn-login" width="133px" type="primary" onClick={clickHandler}>
                Get a Quote
              </Button>

              <Button className="btn-signup" width="133px" type="primary">
                Login
              </Button>
            </ButtonWrap>
          </NavigationWrap>

          <div
            className="hamburgerWrapper"
            onClick={() => setShowNav(!showNav)}
          >
            {showNav ? (
              <RxCross2 size={20} />
            ) : (
              <img src={hamburger} alt="hamburger" />
            )}
          </div>
        </div>
      </HeaderWrapper>
    </>
  );
};

export default Header;
