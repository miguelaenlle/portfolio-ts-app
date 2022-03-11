import classes from "./Email.module.css";
import EmailIcon from "../../../svgs/EmailIcon";

const Email: React.FC<{ text: string; email: string }> = (props) => {
  return (
    <div className={classes["email-row"]}>
      <EmailIcon />
      <p className={classes["email-text"]}>{props.text}</p>
    </div>
  );
};
export default Email;
