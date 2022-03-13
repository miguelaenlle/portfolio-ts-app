import React from "react";
import { Fade } from "react-awesome-reveal";
import ViewLink from "../components/buttons/ViewLink";
import SocialIcons from "../components/groups/SocialIcons";
import LinkIcon from "../components/icons/LinkIcon";
import Header from "../components/text/Header";
import Subheader from "../components/text/Subheader";
import { aboutData } from "../constants/about-info";
import classes from "./About.module.css";
import Wrapper from "./Wrapper";

const About: React.FC = (props) => {
  const offset = 500;
  const triggerOnce = true;

  return (
    <section className={classes["header-background"]}>
      <Wrapper compact={false}>
        <Fade duration={offset} triggerOnce={triggerOnce}>
          <Header content={aboutData.header} />
        </Fade>
        <Fade duration={offset * 1} delay={0} triggerOnce={triggerOnce}>
          <Subheader content={aboutData.subheader} />
        </Fade>
        <Fade duration={offset * 1} delay={0} triggerOnce={triggerOnce}>
          <SocialIcons socials={["email", ...aboutData.socials]} />
          <br />
          <ViewLink
            text={"View Resume"}
            link={aboutData.resumeLink}
            reversed={true}
            icon={<LinkIcon />}
          />
        </Fade>
      </Wrapper>
    </section>
  );
};
export default About;
