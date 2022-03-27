import { useContext } from "react";
import { Fade } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";
import SizeContext from "../../../context/size-context";
import ProjectDetails from "../../../models/ProjectDetails";
import JobIcon from "../../icons/JobIcon";
import LocationIcon from "../../icons/LocationIcon";
import TimeIcon from "../../icons/TimeIcon";
import XMark from "../../icons/XMark";
import SkillRow from "../SkillRow";
import classes from "./PortfolioDetailHeader.module.css";
import PortfolioIcon from "./PortfolioIcon";
import BackButton from "../../buttons/BackButton";

const PortfolioDetailHeader: React.FC<{
  project: ProjectDetails;
  handleGoBack: () => void;
}> = (props) => {
  const sizeCtx = useContext(SizeContext);
  const isLarge = sizeCtx.isLarge;
  const project = props.project;
  const navigate = useNavigate();
  return (
    <div className={classes["header-background"]}>
      <BackButton handleClick={props.handleGoBack} />
      <div className={classes["header-row"]}>
        <div
          className={`${classes["header-item-main"]} ${classes["header-item"]}`}
        >
          <PortfolioIcon projectID={project.id} />
          <h1 className={classes["header-text"]}>{project.name}</h1>
        </div>
      </div>
      <p className={classes["header-description"]}>{project.description}</p>
      <br />
      <div
        className={
          isLarge ? classes["header-item-row"] : classes["header-item-col"]
        }
      >
        <div className={classes["header-item"]}>
          <LocationIcon />
          <p>
            {project.location}, {project.occupation}
          </p>
        </div>
        <div className={classes["header-item"]}>
          <TimeIcon />
          <p>
            {project.startTime} - {project.endTime}
          </p>
        </div>
      </div>
      <div className={classes["header-item"]}>
        {isLarge && <JobIcon />}
        <p>{project.services.join(", ")}</p>
      </div>

      <div className={classes["skill-row"]}>
        <SkillRow
          skillList={project.skills}
          wrapped={true}
          compactSizing={true}
        />
      </div>
    </div>
  );
};
export default PortfolioDetailHeader;
