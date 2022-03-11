import classes from "./ASJH.module.css";
import PortfolioItem from "../PortfolioItem";
import PageDivider from "../../Text/Header/PageDivider";
import { asjhSkills } from "../../../constants/skills";
import ASJHMockup from "../Mockups/ASJHMockup";
const ASJH: React.FC<{}> = (props) => {
  return (
    <>
      <br />
      <br />
      <br />
      <PortfolioItem
        header="Legal Forms Platform for National Nonprofit"
        description={[
          "Designed and developed legal form builder site for national nonprofit “A Soldier’s Journey Home",
          "Automated data import & export procedures",
          "Handles 500+ legal applications a year",
        ]}
        buttons={[
          { buttonType: "testimonial", redirect: "" },
          { buttonType: "website", redirect: "" },
        ]}
        skills={asjhSkills}
        location="Remote"
        occupation="Freelance"
        startDate="January 2022"
        endDate="Present"
        mockup={<ASJHMockup />}
        compact={false}
      />
      <br />
      <div className={classes.separator}></div>
    </>
  );
};
export default ASJH;
