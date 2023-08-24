import styled from "styled-components";

export const FooterContainer = styled.div`
  // padding: 15px;
  font-size: 20px;
  margin-top: 100px;
  width: 100vw;
  background-color: rgb(250, 250, 250);
`;
export const FooterHeadWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid lightgrey;
  // padding: 15px;
  z-index: 50;
  margin: 10px auto;
  @media (max-width: 375px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;
export const FooterList = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  z-index: 50;
  @media (max-width: 375px) {
    display: block;
    flex-direction: column;
    width: 100%;
  }
`;
export const FooterSvgWraper = styled.div`
  position: absolute;
  margin-top: 0;
  margin-left: 0px;
  margin: auto;
  padding: auto;
  text-align: center;
  @media (max-width: 375px) {
    display: none;
    width: 100%;
  }
`;
export const FooterLogoWrapper = styled.div`
  z-index: 25;
`;
export const FooterIconsWrapper = styled.div`
  margin: 0;
  // padding: 10px;
  display: flex;
  justify-content: space-evenly;
`;
export const List = styled.li`
  list-style: none;
  padding: 5px;
  z-index: 25;
  &&:hover {
    cursor: pointer;
  }
`;
export const FooterListHead = styled.p`
  color: rgb(149, 169, 198);
  margin-bottm: 10px;
`;
export const FooterContent = styled.div`
  margin: 10px 75px;
  padding: 0px 10px;
`;
export const FooterPattern = styled.img`
  margin: 0;
  padding: 0;
`;
export const IconButtons = styled.button`
  border: none;
  height: 30px;
  width: 30px;
  padding: 5px;
  margin-right: 5px;
  font-size: 20px;
`;
