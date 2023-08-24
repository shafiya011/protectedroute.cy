import React from "react";
import { MoreOutlined } from "@ant-design/icons";
import { Button, Dropdown } from "antd";
import {
  ActionContainer,
  NewestBtn,
  MoreBtn,
  MoreDropDown,
  FilterBtn,
} from "../Stylings/reviewDisplayStyle";
import Filter from "../Images.js/filter.svg";
import Newest from "../Images.js/newestlines.svg";
import ActivityFeed from "../Images.js/activityFeed.svg";

const DisplayReview = () => {
  const items = [
    {
      key: "1",
      label: "Move Review",
    },
    {
      key: "2",
      label: "Move Bulk Reviews",
    },
    {
      key: "3",
      label: "Copy Review",
    },
    {
      key: "4",
      label: "Copy Bulk Reviews",
    },
  ];
  return (
    <div>
      <ActionContainer>
        <div>
          <FilterBtn id="filterBtn" shape="circle">
            <img src={Filter} alt="filter" />
          </FilterBtn>
        </div>
        <div>
          <NewestBtn id="newestBtn" type="default">
            <img src={Newest} alt="newest" />
            Newest
          </NewestBtn>
          <Button id="activityBtn" shape="circle">
            <img src={ActivityFeed} alt="activity feed" />
          </Button>
          <MoreDropDown
            id="dropDown"
            menu={{
              items,
            }}
          >
            <MoreBtn
              id="moreBtn"
              shape="circle"
              icon={<MoreOutlined />}
            ></MoreBtn>
          </MoreDropDown>
        </div>
      </ActionContainer>
      <div>{/* <Reviews/> */}</div>
    </div>
  );
};

export default DisplayReview;
