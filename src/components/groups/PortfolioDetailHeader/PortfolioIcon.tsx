import classes from "./PortfolioIcon.module.css";

const directory = "/app-icons";
const PortfolioIcon: React.FC<{ projectID: string }> = (props) => {
  return (
    <div>
      {props.projectID === "asjh" && (
        <img
          src={`${directory}/ASJH.png`}
          className={`${classes["portfolio-icon-unstyled"]}`}
        />
      )}
      {props.projectID === "rentr" && (
        <img
          src={`${directory}/Rentr.png`}
          className={classes["portfolio-icon"]}
        />
      )}
      {props.projectID === "scatter" && (
        <img
          src={`${directory}/Scatter.png`}
          className={classes["portfolio-icon"]}
        />
      )}
      {props.projectID === "tidynote" && (
        <img
          src={`${directory}/TidyNote.png`}
          className={classes["portfolio-icon"]}
        />
      )}
    </div>
  );
};
export default PortfolioIcon;
