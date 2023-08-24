import styled from "styled-components";

export const NavContainer = styled.nav`
 
@import url("https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap");
  font-family: DM Serif Display;

  width:100vw;
  margin: 0px;
  align-items: center;
  background: white;
  z-index: 10;
  position: relative;
  text-align: center;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;

  @media (max-width: 375px) {
    width: 100%;
    margin:0;
    padding;0;
    height:70px;
    position:static;
    display: flex;    
    justify-content: space-between;
  }
`;
export const NavUl = styled.ul`
  text-align: center;
  padding: 0px 14px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-decoration: none;
  list-style: none;
  position: static;
  display: flex;
  margin: 0;
  @media (max-width: 375px) {
    display: none;
  }
`;

export const NavList = styled.li`
  padding: 5px 14px;
  text-decoration: none;
  color: grey;
  &&:hover {
    cursor: pointer;
    color: black;
  }
`;
export const NavButton = styled.button`
  border: 2px solid black;
  padding: 10px;
  &&:hover {
    cursor: pointer;
    background-color: rgb(45, 38, 64);
    color: white;
  }
`;
export const NavLogoContainer = styled.div`
margin;auto;
padding:15px;
text-align:center;
  @media (max-width: 375px) {
    width:100%
    margin:auto;
    padding:auto;
    text-align: center;
  }
`;
export const HamburgerContainer = styled.div`
  display: none;

  @media (max-width: 400px) {
    display: block;
  }
`;
export const Hamburger = styled.button`
  border: none;
  &&:hover {
    cursor: pointer;
  }
`;
