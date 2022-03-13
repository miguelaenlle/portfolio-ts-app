import classes from "./LearnMoreButton.module.css";
import ListIcon from "../icons/ListIcon";
import { useNavigate } from "react-router-dom";

const LearnMoreButton: React.FC<{
  link: string;
  handleButtonClicked: () => void;
}> = (props) => {
  const navigate = useNavigate();
  return (
    <button
      className={classes["button-background"]}
      onClick={props.handleButtonClicked}
    >
      <ListIcon />
      <p>Learn More</p>
    </button>
  );
};
export default LearnMoreButton;
