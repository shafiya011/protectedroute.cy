import { Card, Tag } from "antd";
import styled from "styled-components";
export const ReviewContainer = styled.aside`
  //   width: 40vw;
  // border: 1px solid black;
  background-color: white;
  border-radius: 20px;
  margin: auto;
  padding: 20px;
  box-sizing: border-box;
`;
export const ReviewCard = styled(Card)`
  margin: 30px auto;
`;
export const NameContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Name = styled.p`
  font-size: 25px;
  font-weight: 500;
  text-align: center;
`;
export const Image = styled.img`
  width: 100px;
  height: 100px;
`;
export const ImgExp = styled.img`
  width: 50px;
  height: 30px;
`;
export const NamenLogo = styled.div`
  display: flex;
`;
export const RateContainer = styled.div`
  //   margin: auto;
  text-align: center;
`;
export const ReviewMsg = styled.div`
  text-align: start;
  word-break: break-word;
  font-size: 15px;
  color: rgb(72, 92, 114);
`;
export const ReviewMsgContainer = styled.div`
  text-align: center;
  margin: 10px 0px 30px 47px;
`;
export const UsernIcons = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0px 0px 20px 47px;
`;
export const ReplyContainer = styled.input`
  border: none;
  width: 95%;
  height: 100px;
  border-radius: 3px;
  padding: 10px 10px;
  background: rgb(248, 248, 249);
  margin: 20px 0px 10px 47px;
  flex-direction: column;
  font-size: 15px;
  font-weight: 500;
  background: #e4e7ea;
  border-color: rgb(118, 133, 149);
`;
export const EditIcon = styled.span`
  right: 0;
  margin-right: 0;
`;
export const ReplyTextContainer = styled.div`
  margin: 10px;
  border: none;
  width: 95%;
  border-radius: 3px;
  padding: 20px 10px;
  background: rgb(248, 248, 249);
  margin: 20px 0px 10px 47px;
`;
export const ReplyNameContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ReplyNameCard = styled.div`
  display: flex;
`;
export const Reply = styled.div`
  margin: 30px 0px 0px 60px;
  font-size: 15px;
  line-height: 140%;
  color: rgb(72, 92, 114);
  word-break: break-word;
`;
export const IconHolder = styled.div`
  padding: 10px;
  display: inline-block;
`;
export const IconBtn = styled.div`
  display: flex;
`;

export const PDate = styled.span`
  color: grey;
  display: block;
`;
export const Date = styled.div`
  text-align: end;
  font-weight: 500;
  font-size: 12px;
  line-height: 13px;
  color: rgb(163, 173, 184);
  margin: 5px;
`;
export const Rating = styled.span`
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  color: rgb(36, 46, 57);
  margin-right: 10px;
`;
export const User = styled.div`
  display: flex;
  align-items: center;
`;
export const UserName = styled.p`
  font-size: 15px;
  line-height: 17px;
  color: rgb(72, 92, 114);
  font-weight: 500;
  overflow: hidden;
  white-space: nowrap;
`;
export const ReplyName = styled.label`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: rgb(58, 74, 91);
  text-transform: none;
  white-space: nowrap;
`;
export const SavenCancel = styled.div`
  text-align: end;
`;
export const LocationTag = styled(Tag)`
  color: rgb(118, 133, 149);

  border: 1px solid rgb(163, 173, 184);
  margin: 0px 15px;
`;
export const SocialIconsImg = styled.img`
  margin-right: 10px;
`;
export const StyledCardMetaDetail = styled.div`
  .ant-card-meta-description {
    font-size: 15px;
    color: rgb(136, 149, 163);
    min-height: 20px;
    letter-spacing: 0.02em;
  }
`;
export const StyledCard = styled.div`
  .ant-card .ant-card-meta-detail > div:not(:last-child) {
    margin-bottom: 0px;
    box-sizing: border-box;
    font-weight: 500;
    font-size: 18px;
    color: rgb(58, 74, 91);
  }
`;
