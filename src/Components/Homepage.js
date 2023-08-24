// import "../../public/";

import LeftPattern from "../Images.js/bg-pattern-intro-left-desktop.svg";
import TopRightPattern from "../Images.js/bg-pattern-intro-right-desktop.svg";
import MobileLeftPattern from "../Images.js/bg-pattern-intro-left-mobile.svg";
import MobileRightPattern from "../Images.js/bg-pattern-intro-right-mobile.svg";
import {
  HomeAboutSection,
  HomeContainer,
  HomePic,
  HomecontentWrapper,
  HomeSvgWrapper1,
  FamilyPhoto,
  AboutContent,
  AboutHead,
  AboutDescription,
  LeftPatternWrapper,
  Seperator,
  Button,
  MobileSvgWrapper1,
  MobileSvgWrapper2,
} from "../Stylings/HomePageStylings";

const HomePage = () => {
  return (
    <HomeContainer>
      <HomecontentWrapper>
        <HomeAboutSection>
          <AboutContent>
            <Seperator></Seperator>
            <AboutHead>Humanizing your insurance.</AboutHead>
            <AboutDescription>
              Get your life insurance coverage easier and faster. We blend our
              expertise and technology to help you find the plan that’s right
              for you. Ensure you and your loved ones are protected.
            </AboutDescription>
            <Button>VIEW PLANS</Button>
          </AboutContent>
        </HomeAboutSection>

        <HomePic>
          <HomeSvgWrapper1>
            <img src={TopRightPattern} alt="RightPattern"></img>
          </HomeSvgWrapper1>
          <MobileSvgWrapper1>
            <img src={MobileRightPattern} alt="RightPattern"></img>
          </MobileSvgWrapper1>
          <FamilyPhoto
            src="./image-intro-desktop.jpg"
            alt="familyphoto"
          ></FamilyPhoto>
        </HomePic>
      </HomecontentWrapper>
      <LeftPatternWrapper>
        <img src={LeftPattern} alt="LeftDeskTopPattern"></img>
      </LeftPatternWrapper>
      <MobileSvgWrapper2>
        <img src={MobileLeftPattern} alt="LeftPattern"></img>
      </MobileSvgWrapper2>
    </HomeContainer>
  );
};

export default HomePage;
