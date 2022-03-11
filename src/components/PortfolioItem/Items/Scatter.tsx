import classes from "./Scatter.module.css";
import { scatterSkills } from "../../../constants/skills";
import PageDivider from "../../Text/Header/PageDivider";
import PortfolioItem from "../PortfolioItem";
import ScatterMockup from "../Mockups/ScatterMockup";

const Scatter: React.FC<{}> = (props) => {
  return (
    <>
      <PortfolioItem
        header="Mobile Student Data Access Platform"
        description={[
          "iOS app and admin website for accessing and maintaining student data connected to student ID cards",
          "Provides data access for 2,000+ students to John Hersey High School administration",
          "Seamlessly integrated with district databases using Google Cloud and Algolia ",
        ]}
        buttons={[
          { buttonType: "app", redirect: "" },
          { buttonType: "website", redirect: "" },
        ]}
        skills={scatterSkills}
        location="Remote"
        occupation="Freelance"
        startDate="October 2021"
        endDate="Present"
        mockup={<ScatterMockup />}
        compact={false}
      />
      <br />
      <div className={classes.separator}></div>
      
    </>
  );
};
export default Scatter;
