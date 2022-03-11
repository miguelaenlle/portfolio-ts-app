import classes from "./ScatterMockup.module.css";

const ScatterMockup: React.FC<{}> = (props) => {
  // laptop.png
  // cam-phone-view.png
  // detail-phone-view.png

  const laptop = (
    <img
      className={classes["image-1"]}
      src={"./mockups/Scatter/laptop.png"}
      alt="Scatter Screenshot"
    />
  );

  const camPhoneView = (
    <img
      className={classes["image-2"]}
      src={"./mockups/Scatter/cam-phone-view.png"}
      alt="Scatter Screenshot"
    />
  );

  const detailPhoneView = (
    <img
      className={classes["image-3"]}
      src={"./mockups/Scatter/detail-phone-view.png"}
      alt="Scatter Screenshot"
    />
  );

  return (
    <div className={`${classes["image-1"]} ${classes["base-image"]}`}>
      {laptop}
      <div className={`${classes["image-2"]} ${classes["sub-image-1"]}`}>
        {camPhoneView}
      </div>
      <div className={`${classes["image-3"]} ${classes["sub-image-2"]}`}>
        {detailPhoneView}
      </div>
    </div>
  );
};
export default ScatterMockup;
