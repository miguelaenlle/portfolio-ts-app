import classes from "./NavigationRow.module.css";
import NavigationItem from "./NavigationItem";
import NavigationSpacer from "./NavigationSpacer";

const NavigationRow: React.FC<{}> = (props) => {
  return (
    <div className={classes["navigation-row"]}>
      <NavigationItem text="Projects" handleClick={() => {}} />
      <NavigationSpacer />
      <NavigationItem text="Skills" handleClick={() => {}} />
      <NavigationSpacer />
      <NavigationItem text="Contact" handleClick={() => {}} />
    </div>
  );
};
export default NavigationRow;
