import { Breadcrumb, Button, Tag } from "antd";
import { styled } from "styled-components";
export const Navbar = styled.nav`
  width: 100vw;
  box-sizing: border-box;
  margin: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(228, 231, 234);
  position: sticky;
  z-index: 50;
  padding: 10px;
  font-family: "BlinkMacSystemFont", "Segoe UI", "PingFang SC",
    "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
`;
export const NavTool = styled.div`
  display: flex;
  align-items: center;
`;
export const LeftHead = styled.div`
  display: flex;
  align-items: center;
`;
export const Heading = styled.div`
  margin-left: 14px;
  padding-bottom: 5px;
  width: 100%;
`;
export const OrgName = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: rgb(65, 83, 103);
  margin-bottom: 0px;
`;
export const MenuFold = styled.div`
  font-size: 23px;
  text-align: center;
  padding: 5px;
`;
export const Letter = styled.div`
  border-radius: 50%;
`;

export const NameCard = styled.div`
  color: rgb(255, 255, 255);
  background-color: rgb(52, 73, 94);
  border-radius: 50%;
  font-size: 19px;
  width: 36px;
  height: 35px;
  text-align: center;
  padding-top: 5px;
  margin: 0px 7px;
`;
export const ReviewHeaderName = styled.label`
  margin: 0;
  font-size: 13px;
  font-weight: 500;
  color: rgb(72, 92, 114);
`;
export const ReviewHeaderAdmin = styled.label`
  font-size: 12px;
  font-weight: 400;
  color: rgb(163, 173, 184);
`;
export const SearchBtn = styled(Button)`
  background-color: aliceblue;
  color: dodgerblue;
`;
export const BreadCrumbs = styled(Breadcrumb)`
  font-size: 13px;
  /* flex: 2 1 0%; */
  white-space: break-spaces;
  cursor: pointer;
  color: rgb(61, 122, 182);
`;
export const OrgTag = styled(Tag)`
  font-size: 12px;
  float: right;
  color: rgb(27, 99, 169);
  max-width: 265px;
  border: 1px solid rgb(175, 200, 225);
  border-radius: 2px;
  height: 32px;
  line-height: 30px;
  text-align: center;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  text-transform: uppercase;
  background: rgb(237, 243, 248);
  margin-left: 10px;
`;
