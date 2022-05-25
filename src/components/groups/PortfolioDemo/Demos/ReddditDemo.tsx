import { useNavigate } from "react-router-dom";
import PortfolioDemoButton from "../PortfolioDemoButton";
import { projectDetails } from "../../../../constants/projects";

import classes from "./Demos.module.css";

const ReddditDemo: React.FC<{}> = (props) => {
  return (
    <div>
      <div className={classes["instruction-content"]}>
        Note: The website content may take a few seconds to load initially due
        to free Heroku server having to re-allocate.
      </div>
      <a href={projectDetails.redddit.webDemoLink ?? ""} target="_blank">
        <PortfolioDemoButton
          appDemoText={"Go to website demo"}
          handleClick={() => {}}
        />
      </a>
      <a href={projectDetails.redddit.githubLink ?? ""} target="_blank">
        <PortfolioDemoButton
          appDemoText={"Go to project github"}
          handleClick={() => {}}
        />
      </a>
    </div>
  );
};
export default ReddditDemo;
