import React from "react";
import {
  ServiceWrapper,
  ViewMore,
  ServiceContainer,
  ViewMoreHeading,
  ServiceDetails,
  Button,
  ButtonContainer,
  HowWeWorkSvgContainer,
  ServiceSeperator,
  ServiceHead,
  Services,
  Processh2,
} from "../Stylings/ServicePageStylings";
import AffordablePrices from "../Svg/AffordablePrices";
import HowWeWork from "../Svg/HowWeWork";
import PeopleFirst from "../Svg/PeopleFirst";
import SnappyProcess from "../Svg/SnappyProcess";

const InsureServices = () => {
  return (
    <ServiceContainer>
      <ServiceSeperator></ServiceSeperator>
      <div>
        <ServiceHead>We're different</ServiceHead>
      </div>
      <ServiceWrapper>
        <Services>
          <SnappyProcess />
          <Processh2>Snappy Process</Processh2>
          <ServiceDetails>
            Our application process can be completed in minutes, not hours.
            Don’t get stuck filling in tedious forms.
          </ServiceDetails>
        </Services>
        <Services>
          <AffordablePrices />
          <Processh2> Affordable Prices</Processh2>
          <ServiceDetails>
            We don’t want you worrying about high monthly costs.Our prices may
            be low, but we still offer the best coverage possible.
          </ServiceDetails>
        </Services>
        <Services>
          <PeopleFirst />
          <Processh2>People First</Processh2>
          <ServiceDetails>
            Our plans aren’t full of conditions and clauses to prevent payouts.
            We make sure you’re covered when you need it.
          </ServiceDetails>
        </Services>
      </ServiceWrapper>
      <ViewMore>
        <ViewMoreHeading>Find out more about how we work </ViewMoreHeading>
        <ButtonContainer>
          <Button>How We Work</Button>
        </ButtonContainer>
        <HowWeWorkSvgContainer>
          <HowWeWork />
        </HowWeWorkSvgContainer>
      </ViewMore>
    </ServiceContainer>
  );
};

export default InsureServices;
