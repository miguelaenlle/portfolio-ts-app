import TidynotePortfolioDemo from "./Demos/TidynotePortfolioDemo";
import ASJHDemo from "./Demos/ASJHDemo";
import ScatterDemo from "./Demos/ScatterDemo";

const PortfolioDemo: React.FC<{ portfolioItem: string }> = (props) => {
  if (props.portfolioItem === "tidynote") {
    return <TidynotePortfolioDemo />;
  } else if (props.portfolioItem === "asjh") {
    return <ASJHDemo />
  } else if (props.portfolioItem === "scatter") {
    return <ScatterDemo />
  } else {
    return <div></div>;
  }
};
export default PortfolioDemo;
