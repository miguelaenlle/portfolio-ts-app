import classes from "./TidyNote.module.css";
import PortfolioItem from "../PortfolioItem";
import PageDivider from "../../Text/Header/PageDivider";
import TidynoteMockup from "../Mockups/TidynoteMockup";
import { tidynoteSkills } from "../../../constants/skills";


const TidyNote: React.FC<{}> = (props) => {
  return (
    <>
      <br />
      <br />
      <br />
      <PortfolioItem
        header="Educational Task Management Platform"
        description={[
          "Designed and developed iOS app with integrated assignment notebook for students viewable by educators via iOS and website",
          "Integrated district database using Firebase",
          "Actively used by 220+ students and educators at John Hersey HIgh School",
        ]}
        buttons={[
          { buttonType: "app", redirect: "" },
          { buttonType: "website", redirect: "" },
        ]}
        skills={tidynoteSkills}
        location = "Remote"
        occupation = "Freelance"
        startDate = "June 2021"
        endDate = "Present"
        mockup={<TidynoteMockup />}
        compact={false}
      />
      <br />
    </>
  );
};
export default TidyNote;
