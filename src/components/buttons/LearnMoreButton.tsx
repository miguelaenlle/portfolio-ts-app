import classes from "./LearnMoreButton.module.css";
import ListIcon from "../icons/ListIcon";

const LearnMoreButton: React.FC<{link: string}> = (props) => {
  return (
    <button className={classes["button-background"]}>
      <ListIcon />
      <p>Learn More</p>
    </button>
  );
};
export default LearnMoreButton;
