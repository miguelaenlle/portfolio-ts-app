import classes from "./AboutContent.module.css";
import NavigationRow from "../NavigationRow/NavigationRow";
import Link from "../Button/Link/Link";

const AboutContent: React.FC<{}> = (props) => {
  return (
    <>
      <div className={`${classes["main-content"]}`}>
        <h1>Miguel Aenlle</h1>
        <p className={classes.subheader}> Fullstack Web + Mobile Developer</p>
        <br />
        <NavigationRow />
        <br />
        <Link text={"View Resume"} link={"/resume"} />
      </div>
    </>

  );
};
export default AboutContent;
