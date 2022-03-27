import ProjectDetails from "../../../models/ProjectDetails";
import classes from "./PortfolioDescription.module.css";

const PortfolioDescription: React.FC<{ project: ProjectDetails }> = (props) => {
  return (
    <>
      <ul className={classes["main-description"]}>
        {props.project.mainDescription.map((descriptionItem, index) => {
          return <li key={`description-item-${index}`}>{descriptionItem}</li>;
        })}
      </ul>
    </>
  );
};
export default PortfolioDescription;
