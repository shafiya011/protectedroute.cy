import React from "react";
import {
  SearchOutlined,
  MenuUnfoldOutlined,
  BellOutlined,
} from "@ant-design/icons";
import { Tag, Button, Breadcrumb, Divider } from "antd";
import {
  Navbar,
  NavTool,
  LeftHead,
  Heading,
  OrgName,
  MenuFold,
  NameCard,
  ReviewHeaderName,
  ReviewHeaderAdmin,
  SearchBtn,
} from "../Stylings/ReviewHeadStylings";

const ReviewHeader = () => {
  return (
    <Navbar className="reviewNavbar">
      <LeftHead>
        <MenuFold>
          <MenuUnfoldOutlined />
        </MenuFold>

        <Heading>
          <OrgName>Academy Mortage</OrgName>
          <div>
            <Breadcrumb
              className="breadCrums"
              separator=">"
              items={[
                {
                  title: "Organisation",
                },
                {
                  title: "Accounts",
                },
                {
                  title: "Reviews",
                  href: "",
                },
              ]}
            />
          </div>
        </Heading>
      </LeftHead>

      <NavTool>
        <SearchBtn id="searchBtn" shape="circle" icon={<SearchOutlined />} />
        <div className="headTool">
          <Tag id="orgTag" color="processing">
            ORG - Academy Mortgage
          </Tag>
        </div>
        <div className="headTool">
          <Button className="headTool">Help</Button>
        </div>
        <div className="headTool">
          <Button shape="circle" icon={<BellOutlined />} />
        </div>

        <Divider type="vertical" />
        <NameCard>S</NameCard>
        <div>
          <div>
            <ReviewHeaderName className="myName">Shafiya FA</ReviewHeaderName>
          </div>
          <ReviewHeaderAdmin className="admin">
            Onboarding Admin
          </ReviewHeaderAdmin>
        </div>
      </NavTool>
    </Navbar>
  );
};

export default ReviewHeader;
