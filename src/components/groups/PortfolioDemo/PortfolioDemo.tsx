import TidynotePortfolioDemo from "./Demos/TidynotePortfolioDemo";
import ASJHDemo from "./Demos/ASJHDemo";
import ScatterDemo from "./Demos/ScatterDemo";
import ReddditDemo from "./Demos/ReddditDemo";

const PortfolioDemo: React.FC<{ portfolioItem: string }> = (props) => {
  if (props.portfolioItem === "tidynote") {
    return <TidynotePortfolioDemo />;
  } else if (props.portfolioItem === "asjh") {
    return <ASJHDemo />
  } else if (props.portfolioItem === "scatter") {
    return <ScatterDemo />
  } else if (props.portfolioItem === "redddit") {
    return <ReddditDemo />
  } else {
    return <div></div>;
  }
};
export default PortfolioDemo;
