import styled from "styled-components";
export const ServiceContainer = styled.div`
  @import url(https://fonts.google.com/specimen/DM+Serif+Display);
  margin: 50px auto;
  width: 100vw;
  @media (max-width: 375px) {
    display: block;
    width: 100%;
    padding: 0;
    postion: relative;
    margin-top: 20px;
    flex-direction: column;
  }
`;

export const ServiceWrapper = styled.div`
  display: flex;
  margin: 50px 80px;
  justify-content: space-around;
  font-size: 16px;

  @media (max-width: 375px) {
    display: block;
    flex-direction: column;
    width: 100%;
    margin-top: 30px;
  }
`;
export const ServiceHead = styled.h1`
  @import url ("https://fonts.google.com/specimen/Karla");
  font-size: 70px;
  letter-spacing: -1px;
  font-weight: 700;

  font-family: "karla", serif;
  margin: 50px 110px;
  @media (max-width: 375px) {
    display: block;
    flex-direction: column;
    text-align: center;
    width: 100%;
    margin-top: 200px;
  }
`;
export const Services = styled.div`
  padding: 20px 40px;
  @media (max-width: 375px) {
    display: block;
    flex-direction: column;
    width: 100%;
    text-align: center;
  }
`;
export const Processh2 = styled.h2`
  color: #2b272f;
  font-size: 30px;
  letter-spacing: -0.39px;
`;
export const ViewMore = styled.div`
  background-color: rgb(45, 38, 64);
  color: white;
  height: 250px;
  font-weight: 900;
  margin: 80px 110px;
  display: flex;
  justify-content: space-around;
  @media (max-width: 375px) {
    display: block;
    width: 100%;
    text-align: center;
    margin: 0;
    padding: 0;
    font-size: 16px;
  }
`;
export const ServiceDetails = styled.p`
  word-spacing: 0.7px;
  color: #837d87;
  text-align: start;
  @media (max-width: 375px) {
    display: block;
    flex-direction: column;
    width: 100%;
  }
`;
export const ViewMoreHeading = styled.h1`
  font-weight: 900;
  word-spacing: 1.5px;
  font-size: 65px;

    max-width: 47.5rem;
  width: 50%;
  padding: 0px 40px;
  margin: auto;
  @media (max-width: 375px) {
    font-size: 26px;
    margin: auto;
    text-align: center;
    padding: 35px;
`;

/* border:1px solid yellowgreen;` */

export const Button = styled.button`
  background-color: rgb(45, 38, 64);
  border: 1px solid white;
  width: 130px;
  height: 50px;
  color: white;
  font-size: 16px;
  padding: 5px;
  font-weight: 500;
  margin: auto;
  &&:hover {
    cursor: pointer;
    background-color: white;
    color: rgb(45, 38, 64);
  }
`;
export const ButtonContainer = styled.div`
  // width: 50%;
  position: relative;
  margin: auto;
  text-align: center;
  padding: 10px;
  @media (max-width: 375px) {
    display: block;
    flex-direction: column;
    width: 100%;
  }
`;
export const HowWeWorkSvgContainer = styled.div`
  position: absolute;
  z-index: 10;
  right: 0;
  margin-right: 0px;
  width: 535px;
  // width: 50%;

  @media (max-width: 375px) {
    display: none;
  }
`;
export const ServiceSeperator = styled.div`
  background-color: rgb(230, 210, 270);
  width: 150px;
  display: inline-block;
  height: 1px;
  margin-top: 10px;
  margin-right: 45%;
  text-align: start;
`;
