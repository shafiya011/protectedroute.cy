import React from "react";
import {
  CardContainer,
  Scores,
  Description,
  Scard,
} from "../Stylings/SummaryCard";

const SummaryCard = () => {
  return (
    <CardContainer>
      <Scard>
        <Scores>19,090</Scores>
        <Description>Total reviews</Description>
      </Scard>

      <Scard>
        <Scores>4.8</Scores>
        <Description>Average Score</Description>
      </Scard>

      <Scard>
        <Scores>17,400</Scores>
        <Description>Total Replied reviews</Description>
      </Scard>

      <Scard>
        <Scores>15,080</Scores>
        <Description>5-star Reviews</Description>
      </Scard>
    </CardContainer>
  );
};

export default SummaryCard;
