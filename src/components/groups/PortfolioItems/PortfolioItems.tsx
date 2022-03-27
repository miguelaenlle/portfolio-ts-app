import DemoItem from "../../../models/DemoItem";
import HrLine from "../../text/HrLine";
import PortfolioItem from "./PortfolioItem";
import classes from "./PortfolioItems.module.css";

const PortfolioItems: React.FC<{ portfolioItems: DemoItem[] }> = (props) => {
  return (
    <div className={classes["portfolio-items"]}>
      {props.portfolioItems.map((item, index) => {
        return (
          <div key = {`portfolio-item-div-${Math.random.toString()}-${index}`}>
            <PortfolioItem
              key={`portfolio-item-${Math.random.toString()}-${index}`}
              item={item}
            />
            <HrLine />
          </div>
        );
      })}
    </div>
  );
};
export default PortfolioItems;
