import classes from "./PortfolioItem.module.css";
import Link from "../Button/Link/Link";
import LearnMoreButton from "../Button/LearnMore/LearnMoreButton";
import PortfolioList from "./PortfolioList";
import PortfolioItemSkills from "./PortfolioItemSkills/PortfolioItemSkills";
import Skill from "../../models/Skill";
import ScatterMockup from "./Mockups/ScatterMockup";
import React from "react";

const PortfolioItem: React.FC<{
  header: string;
  description: string[];
  buttons: { buttonType: string; redirect: string }[];
  skills: Skill[];
  location: string;
  occupation: string;
  startDate: string;
  endDate: string;
  mockup: React.ReactNode;
  compact: boolean;
}> = (props) => {
  return (
    <div>
      <div className={props.compact ? classes.compact : classes.content}>
        <h2 className={classes.header}>{props.header}</h2>
        <p
          className={classes.subheader}
        >{`${props.location}, ${props.occupation} | ${props.startDate} - ${props.endDate}`}</p>
        {props.mockup}
        {/* <ScatterMockup /> */}
        <PortfolioList listItems={props.description} />
        <br />
        <div className={classes.links}>
          <LearnMoreButton />
          {props.buttons.map((buttonValues) => {
            const link = buttonValues.redirect;
            if (buttonValues.buttonType === "app") {
              return <Link text={"App Demo"} link={link} />;
            } else if (buttonValues.buttonType === "website") {
              return <Link text={"Website Demo"} link={link} />;
            } else if (buttonValues.buttonType === "testimonial") {
              return <Link text={"Testimonial"} link={link} />;
            }
          })}
        </div>
      </div>
      <br />
      <PortfolioItemSkills skills={props.skills} compact={props.compact} />
    </div>
  );
};
export default PortfolioItem;
