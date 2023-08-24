import styled from "styled-components";
// import MobilerightPatter from "../Images.js/bg-pattern-intro-right-mobile.svg";

export const HomeContainer = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Karla:wght@400;700&display=swap");
  font-family: "Karla";
  font-size: 16px;
  position: relative;
  background-color: white;
  height: 100vh;
  width: 100vw;
  @media (max-width: 375px) {
    width: 100%;
    padding: 0;
    position: relative;
  }
`;
export const HomecontentWrapper = styled.div`
  // border: 1px solid black;
  display: flex;
  // position: relative;
  // align-items: center;
  justify-content: center;
  background-color: rgb(45, 38, 64);
  height: 80%;
  @media (max-width: 375px) {
    width: 100%;
    display: block;
    flex-direction: column;
    position: relative;
  }
`;

export const HomeAboutSection = styled.div`
  // border: 1px solid red;
  color: white;
  margin: auto;
  padding: 30px;
  text-align: center;
  width: 50%;
  @media (max-width: 375px) {
    width: 100%;
    position: relative;
    background-image: url("./Images.js/bg-pattern-intro-right-mobile.svg");
  }
`;
export const Seperator = styled.div`
  width: 100px;
  display: inline-block;
  height: 1px;
  background-color: white;
  margin-top: 20px;
  margin-right: 45%;
  text-align: start;
`;
export const AboutContent = styled.div`
  padding: 0 0px 0px 50px;
  text-align: start;
  border-width: 50%;
  // margin: auto auto;
  margin-left: 80px;
  position: relative;
  @media (max-width: 375px) {
    display: block;
    width: 100%;
    text-align: start;
    margin: 0px;
    padding: 0px;
    position: relative;
  }
`;
export const AboutHead = styled.h1`
  font-size: 60px;
  font-weight: 900;
  padding: 0px 50px 0px 0px;

  @media (max-width: 375px) {
    width: 100%;
    font-size: 35px;
    font-weight: 800px;
  }
`;
export const AboutDescription = styled.p`
  @import url("https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@1&family=Karla:wght@200;400&display=swap");
  font-family: "Karla", sans-serif;
  font-weight: 200;
  font-size: 15px;
  line-height: 1.3rem;
  @media (max-width: 375px) {
    font-size: 16px;
    padding: 10px;
  }
`;

export const Button = styled.button`
  border: 1px solid white;
  background-color: rgb(45, 38, 64);
  padding: 10px;
  width: 40%;
  margin: 20px auto;
  color: white;
  &&:hover {
    cursor: pointer;
    color: black;
    background-color: white;
  }
`;
export const HomePic = styled.div`
  width: 48%;
  order: 2;
  margin-right: 80px;
  @media (max-width: 375px) {
    display: block;
    width: 100%;
    // position: relative;
  }
`;
export const HomeSvgWrapper1 = styled.div`
  position: absolute;
  z-index: 10;
  margin-right: 0px;
  top: 0;
  right: 0;
  height: 480px;
  @media (max-width: 375px) {
    display: none;
  }
`;
export const FamilyPhoto = styled.img`
  position: absolute;
  height: 80%;
  padding: 95px 0px 0px;
  @media (max-width: 375px) {
    display: block;
    width: 100%;
  }
`;
export const LeftPatternWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  @media (max-width: 375px) {
    display: none;
  }
`;
export const MobileSvgWrapper1 = styled.div`
  display: none;

  @media (max-width: 375px) {
    display: block;
    position: absolute;
    z-index: 10;
    margin-right: 0px;
    top: 50%;
    right: 0;
    height: 480px;
  }
`;
export const MobileSvgWrapper2 = styled.div`
  display: none;
  @media (max-width: 375px) {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
  }
`;
