import classes from "./PortfolioDemoButton.module.css";

const PortfolioDemoButton: React.FC<{
  appDemoText: string;
  handleClick: () => void;
}> = (props) => {
  return (
    <div>
      <p className={classes.button} onClick={props.handleClick}>
        {props.appDemoText}
      </p>
    </div>
  );
};
export default PortfolioDemoButton;
