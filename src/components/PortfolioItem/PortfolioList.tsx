import classes from "./PortfolioItem.module.css";
const PortfolioList: React.FC<{ listItems: string[] }> = (props) => {
  return (
    <ul>
      {props.listItems.map((listItem, index) => {
        return (
          <li key={`list-item-${index}`} className={classes["list-item"]}>
            <p>{listItem}</p>
          </li>
        );
      })}
    </ul>
  );
};
export default PortfolioList;
