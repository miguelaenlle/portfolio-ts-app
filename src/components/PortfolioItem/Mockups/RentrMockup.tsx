import classes from "./RentrMockup.module.css";

const RentrMockup: React.FC<{}> = (props) => {
  const mobile1 = (
    <img
      className={classes["image-1"]}
      src={"./mockups/Rentr/mobile-1.png"}
      alt="Rentr Screenshot"
    />
  );
  const mobile2 = (
    <img
      className={classes["image-2"]}
      src={"./mockups/Rentr/mobile-2.png"}
      alt="Rentr Screenshot"
    />
  );

  return (
    <div className={`${classes["image-1"]} ${classes["base-image"]}`}>
      {mobile1}
      <div className={`${classes["image-2"]} ${classes["sub-image-1"]}`}>
        {mobile2}
      </div>
    </div>
  );
};
export default RentrMockup;
