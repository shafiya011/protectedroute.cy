import { Button, Dropdown } from "antd";
import styled from "styled-components";
export const ActionContainer = styled.div`
  /* border:1px solid black; */
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
`;
export const NewestBtn = styled(Button)`
  margin: 0px 10px;
  background: rgb(240, 242, 244);
  font-size: 15px;
  background: rgb(240, 242, 244);
  cursor: pointer;
  text-align: center;
  min-width: 36px;
  min-height: 36px;
`;
export const MoreBtn = styled(Button)`
  margin-left: 10px;
  padding: 5px;
  cursor: pointer;
  min-width: 36px;
  min-height: 36px;
  color: #242e39;
  border-color: #d9d9d9;
  background: #e4e7ea;
`;
export const MoreDropDown = styled(Dropdown)`
  margin: 0px;
  display: inline-block;
  color: #242e39;
  border-color: #d9d9d9;
  background: #e4e7ea;
`;
export const FilterBtn = styled(Button)`
  color: #242e39;
  border-color: #d9d9d9;
  background: #e4e7ea;
  padding: 5px 0px;
  min-width: 36px;
  min-height: 36px;
`;
