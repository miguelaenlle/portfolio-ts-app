import Scatter from "../PortfolioItem/Items/Scatter";
import TidyNote from "../PortfolioItem/Items/TidyNote";
import ASJH from "../PortfolioItem/Items/ASJH";
import Rentr from "../PortfolioItem/Items/Rentr";

import HeaderText from "../Text/Header/HeaderText";
import PageDivider from "../Text/Header/PageDivider";

import classes from "./PortfolioContent.module.css";

const PortfolioContent: React.FC<{}> = (props) => {
  return (
    <>
      <div className={classes.divider}>
        <PageDivider />
      </div>
      <HeaderText text="Projects" />
      <Scatter />
      <ASJH />
      <TidyNote />
      <Rentr />
    </>
  );
};
export default PortfolioContent;
