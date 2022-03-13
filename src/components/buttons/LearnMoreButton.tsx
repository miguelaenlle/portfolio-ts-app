import classes from "./LearnMoreButton.module.css";
import ListIcon from "../icons/ListIcon";
import { useNavigate } from "react-router-dom";

const LearnMoreButton: React.FC<{ link: string }> = (props) => {
  const navigate = useNavigate();
  const handleButtonClicked = () => {
    navigate(props.link);
  };
  return (
    <button
      className={classes["button-background"]}
      onClick={handleButtonClicked}
    >
      <ListIcon />
      <p>Learn More</p>
    </button>
  );
};
export default LearnMoreButton;
