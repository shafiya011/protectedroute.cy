import { Card, Avatar, Rate, Tag, Button, Divider } from "antd";
import { useState } from "react";
import React from "react";
import linkedin from "../Images.js/linkedin.svg";
import linkChain from "../Images.js/linkchain.svg";
import twitter from "../Images.js/twitter.svg";
import facebook from "../Images.js/facebook.svg";
import message from "../Images.js/message.svg";
import flag from "../Images.js/flag.svg";
import {
  NameContainer,
  RateContainer,
  Date,
  Rating,
  ReviewMsgContainer,
  ReviewMsg,
  UsernIcons,
  ReplyContainer,
  EditIcon,
  ReplyTextContainer,
  IconHolder,
  ImgExp,
  User,
  UserName,
  ReplyNameContainer,
  ReplyNameCard,
  Reply,
  ReplyName,
  SavenCancel,
  ReviewCard,
  LocationTag,
  SocialIconsImg,
} from "../Stylings/ReviewStylings";
import { NameCard } from "../Stylings/ReviewHeadStylings";
import Meta from "antd/es/card/Meta";
import {
  ScheduleOutlined,
  EditOutlined,
  DeleteFilled,
} from "@ant-design/icons";
const ProtectedReview = () => {
  const [show, setShow] = useState(false);
  const [showReply, setShowReply] = useState(false);
  const [replyText, setreplyText] = useState("");
  const [replyButton, setReplyButton] = useState(true);
  const [hideReply, setHideReply] = useState();
  const [viewreplyButton, setviewReplyButton] = useState(false);
  const [error, setError] = useState("");

  const HandleReply = () => {
    setShow(true);
    setHideReply(true);
    setReplyButton(false);
    setviewReplyButton(false);
  };

  const HandleHide = () => {
    setHideReply(false);
    setShowReply(false);
    setReplyButton(false);
    setviewReplyButton(true);
  };

  const handleViewReply = () => {
    setShowReply(true);
    setHideReply(true);
    setReplyButton(false);
  };

  const handleSave = () => {
    const isEmpty = replyText.trim() === "";
    if (isEmpty) {
      setError(true);
    } else {
      setError(false);
      setShow(false);
      setShowReply(true);
    }
  };

  const handleDelete = (e) => {
    setShowReply(false);
    setreplyText("");
    setHideReply(false);
    setReplyButton(true);
    setviewReplyButton(false);
  };

  const handleEdit = () => {
    setShow(true);
    setShowReply(false);
  };

  return (
    <div>
      <ReviewCard className="reviewCard" title="Reviews">
        <div>
          <NameContainer>
            <Meta
              avatar={
                <Avatar src="https://tppwebsolutions.com/wp-content/uploads/logo-demo3.png" />
              }
              title="Shafiya Fareen"
              description="India"
            />
            <RateContainer>
              <div>
                <LocationTag id="locationTag">
                  Review From The Previous Location{" "}
                </LocationTag>
                <Rating>5.0</Rating>
                <Rate
                  allowHalf
                  defaultValue={5}
                  style={{ color: `rgb(${44}, ${135}, ${239})` }}
                />
                <Date>
                  <ScheduleOutlined />
                  <span>May 22nd, 2023 01:24 PM</span>
                </Date>
              </div>
            </RateContainer>
          </NameContainer>
          <ReviewMsgContainer>
            <ReviewMsg>
              MSG Global Solutions is known for Work-Life balance which is rated
              at the top and given a rating of 3.9. However, Career growth is
              rated the lowest at 3.5 and can be improved.
            </ReviewMsg>
          </ReviewMsgContainer>
          <UsernIcons>
            <User>
              <ImgExp
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnsqbr5z8vTdqwAyXB-vFCLy2JLyJ9BI_L0A&usqp=CAU"
                alt="verified"
              ></ImgExp>

              <Divider type="vertical" />
              <NameCard>S</NameCard>
              <UserName> Name</UserName>
            </User>
            <div>
              <IconHolder>
                <SocialIconsImg
                  className="socialIcons"
                  src={flag}
                  alt="report"
                ></SocialIconsImg>
                <SocialIconsImg
                  className="socialIcons"
                  src={facebook}
                  alt="facebook"
                ></SocialIconsImg>
                <SocialIconsImg
                  className="socialIcons"
                  src={twitter}
                  alt="twitter"
                ></SocialIconsImg>
                <SocialIconsImg
                  className="socialIcons"
                  src={linkedin}
                  alt="linkedin"
                ></SocialIconsImg>
                <SocialIconsImg
                  className="socialIcons"
                  src={linkChain}
                  alt="sharelink"
                ></SocialIconsImg>
                <SocialIconsImg
                  className="socialIcons"
                  src={message}
                  alt="reply"
                ></SocialIconsImg>
              </IconHolder>

              {replyButton ? (
                <Button
                  className="replyBtn"
                  type="primary"
                  onClick={HandleReply}
                  style={{ color: "white" }}
                >
                  Reply
                </Button>
              ) : hideReply ? (
                <Button
                  className="hideReply"
                  type="Text"
                  onClick={HandleHide}
                  style={{ color: "blue" }}
                >
                  Hide Reply
                </Button>
              ) : viewreplyButton ? (
                <Button
                  className="replyviewBtn"
                  type="Text"
                  onClick={handleViewReply}
                  style={{ color: "blue" }}
                >
                  Reply
                </Button>
              ) : (
                <Button
                  className="hideReply"
                  type="Text"
                  onClick={HandleHide}
                  style={{ color: "blue" }}
                >
                  Hide Reply
                </Button>
              )}
            </div>
          </UsernIcons>
          {show && (
            <div>
              <ReplyContainer
                className="replyContainer"
                value={replyText}
                onChange={(e) => {
                  setreplyText(e.target.value);
                }}
              ></ReplyContainer>
              <SavenCancel>
                {error && (
                  <p className="replyError" style={{ color: "red" }}>
                    {" "}
                    Empty Reply Cannot Be Saved!
                  </p>
                )}
                <Button
                  type="text"
                  onClick={() => {
                    setShowReply(true);
                    setShow(false);
                  }}
                >
                  cancel
                </Button>
                <Button type="primary" className="saveBtn" onClick={handleSave}>
                  save
                </Button>
              </SavenCancel>
            </div>
          )}
          {showReply && (
            <ReplyTextContainer>
              <ReplyNameContainer>
                <ReplyNameCard>
                  <NameCard>S</NameCard>
                  <Divider type="vertical" />
                  <div>
                    <div>
                      <ReplyName className="myName">Shafiya FA</ReplyName>
                    </div>
                    <label className="admin">
                      {" "}
                      <ScheduleOutlined /> Aug 21st, 2023 10.00am{" "}
                    </label>
                  </div>
                </ReplyNameCard>
                <div>
                  <EditIcon>
                    <Button type="text" onClick={handleEdit}>
                      <EditOutlined />
                    </Button>
                    <Button
                      className="deleteBtn"
                      type="text"
                      onClick={handleDelete}
                    >
                      <DeleteFilled />
                    </Button>
                  </EditIcon>
                </div>
              </ReplyNameContainer>
              <Reply>{replyText}</Reply>
            </ReplyTextContainer>
          )}
        </div>
      </ReviewCard>
    </div>
  );
};

export default ProtectedReview;
