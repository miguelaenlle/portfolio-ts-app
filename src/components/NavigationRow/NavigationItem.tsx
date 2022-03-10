import classes from "./NavigationItem.module.css";
const NavigationItem: React.FC<{ text: string; handleClick: () => void }> = (
  props
) => {
  return <p className={classes["navigation-item"]}>{props.text}</p>;
};
export default NavigationItem;
