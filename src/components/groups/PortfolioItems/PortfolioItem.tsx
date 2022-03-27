import classes from "./PortfolioItem.module.css";
import DemoItem from "../../../models/DemoItem";
const PortfolioItem: React.FC<{
  item: DemoItem;
}> = (props) => {
  const demoItem = props.item;
  let image = <div></div>
  if (demoItem.formFactor === "laptop") {
    image = <img src={demoItem.mockupPath} className={classes.laptop} />;
  } else if (demoItem.formFactor === "desktop") {
    image = <img src={demoItem.mockupPath} className={classes.desktop} />;
  } else if (demoItem.formFactor === "tablet") {
    image = <img src={demoItem.mockupPath} className={classes.tablet} />;
  } else if (demoItem.formFactor === "phone") {
    image =  <img src={demoItem.mockupPath} className={classes.phone} />;
  } else {
    image = <div></div>;
  }
  return (
      <div className = {classes.portfolioItem}>
          {image}
      </div>
  )
};
export default PortfolioItem;
