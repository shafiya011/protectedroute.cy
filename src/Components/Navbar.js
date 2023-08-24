import React from "react";

import {
  NavContainer,
  NavUl,
  NavList,
  NavButton,
  NavLogoContainer,
  HamburgerContainer,
  Hamburger,
} from "../Stylings/NavStylings";
import NavLogo from "../Svg/NavLogo";
import HamburgerLogo from "../Images.js/icon-hamburger.svg";

const Navbar = () => {
  return (
    <div>
      <NavContainer>
        <NavLogoContainer className="navHead">
          <NavLogo />
        </NavLogoContainer>
        <NavUl>
          <NavList>HOW WE WORK</NavList>

          <NavList>BLOG</NavList>
          <NavList>ACCOUNT</NavList>
          <NavList>
            <NavButton>VIEW REVIEWS</NavButton>
          </NavList>
          {/* <NavList>
            <NavButton>LOGIN </NavButton>
          </NavList> */}
        </NavUl>

        <HamburgerContainer>
          <Hamburger>
            <img src={HamburgerLogo} alt="hamburger"></img>
          </Hamburger>
        </HamburgerContainer>
      </NavContainer>
    </div>
  );
};

export default Navbar;
