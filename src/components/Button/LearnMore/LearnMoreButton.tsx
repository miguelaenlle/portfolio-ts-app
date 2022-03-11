import classes from "./LearnMoreButton.module.css";
import ListIcon from "../../../svgs/ListIcon";

const LearnMoreButton: React.FC<{}> = (props) => {
  return (
    <button className={classes["button-background"]}>
      <ListIcon />
      <p>Learn More</p>
    </button>
  );
};
export default LearnMoreButton;
