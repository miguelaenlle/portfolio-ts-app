import classes from "./TidynoteMockup.module.css";

const TidynoteMockup: React.FC<{}> = (props) => {
  const laptop = (
    <img
      className={classes["image-1"]}
      src={"./mockups/TidyNote/desktop.png"}
      alt="TidyNote Screenshot"
    />
  );
  const mobile = (
    <img
      className={classes["image-2"]}
      src={"./mockups/TidyNote/tablet.png"}
      alt="TidyNote Screenshot"
    />
  );

  return (
    <div className={`${classes["image-1"]} ${classes["base-image"]}`}>
      {laptop}
      <div className={`${classes["image-2"]} ${classes["sub-image-1"]}`}>
        {mobile}
      </div>
    </div>
  );
};
export default TidynoteMockup;
