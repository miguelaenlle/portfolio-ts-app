import classes from "./SocialIcons.module.css";
import SocialIcon from "./SocialIcon";

const SocialIcons: React.FC<{ socials: string[]; email: string }> = (props) => {
  return (
    <div className={classes["social"]}>
      {props.socials.map((social) => (
        <SocialIcon key={social} network={social} email={props.email} />
      ))}
    </div>
  );
};
export default SocialIcons;
