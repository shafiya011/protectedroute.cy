import React from "react";
import {
  FooterContainer,
  FooterHeadWrapper,
  FooterSvgWraper,
  FooterList,
  FooterLogoWrapper,
  FooterIconsWrapper,
  List,
  FooterListHead,
  FooterContent,
  FooterPattern,
  IconButtons,
} from "../Stylings/FooterStylings";
import {
  TwitterOutlined,
  InstagramFilled,
  FacebookFilled,
  GooglePlusSquareFilled,
} from "@ant-design/icons";
import NavLogo from "../Svg/NavLogo";
import FooterSvg from "../Images.js/bg-pattern-footer-desktop.svg";
const Footer = () => {
  const OurCompany = ["HOW WE WORK", "WHY INSURE?", "VIEW PLANS", "REVIEWS"];
  const Contact = ["FAQ", "TERMS OF USE", "PRIVACY POLICY", "COOKIES"];
  const Helpme = ["SALES", "SUPPORT", "LIVE CHAT"];
  const Others = ["CAREERS", "PRESS", "LICENSES"];

  return (
    <FooterContainer>
      <FooterSvgWraper>
        <FooterPattern src={FooterSvg} alt="FooterPattern"></FooterPattern>
      </FooterSvgWraper>
      <FooterContent>
        <FooterHeadWrapper>
          <FooterLogoWrapper>
            <NavLogo />
          </FooterLogoWrapper>
          <FooterIconsWrapper>
            <IconButtons>
              <TwitterOutlined />
            </IconButtons>
            <IconButtons>
              <InstagramFilled />
            </IconButtons>
            <IconButtons>
              <FacebookFilled />
            </IconButtons>
            <IconButtons>
              <GooglePlusSquareFilled />
            </IconButtons>
          </FooterIconsWrapper>
        </FooterHeadWrapper>
        <FooterList>
          <div>
            <FooterListHead>OUR COMPANY</FooterListHead>
            {OurCompany.map((element, index) => {
              return <List key={index}>{element}</List>;
            })}
          </div>
          <div>
            <FooterListHead>HELPME</FooterListHead>
            {Helpme.map((element, index) => {
              return <List>{element}</List>;
            })}
          </div>
          <div>
            <FooterListHead>CONTACTS</FooterListHead>
            {Contact.map((element, index) => {
              return <List>{element}</List>;
            })}
          </div>
          <div>
            <FooterListHead>OTHERS</FooterListHead>
            {Others.map((element, index) => {
              return <List>{element}</List>;
            })}
          </div>
        </FooterList>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
