import classes from "./ASJHMockup.module.css";

const ASJHMockup: React.FC<{}> = (props) => {
  const laptop = (
    <img
      className={classes["image-1"]}
      src={"./mockups/ASJH/laptop.png"}
      alt="ASJH Screenshot"
    />
  );
  const mobile = (
    <img
      className={classes["image-2"]}
      src={"./mockups/ASJH/mobile.png"}
      alt="ASJH Screenshot"
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
export default ASJHMockup;
