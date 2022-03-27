import classes from "./BackButton.module.css";
import ChevronLeft from "../icons/ChevronLeft";

const BackButton: React.FC<{ handleClick: () => void }> = (props) => {
  return (
    <div className={classes.button} onClick = {props.handleClick}>
      <ChevronLeft />
      <p>Back</p>
    </div>
  );
};
export default BackButton;
