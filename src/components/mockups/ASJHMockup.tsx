import classes from "./ASJHMockup.module.css";
import { Slide } from "react-awesome-reveal";

const ASJHMockup: React.FC<{}> = (props) => {
  const image1 = (
    <img
      className={classes["image-1"]}
      src={"./mockups/ASJH/mockup-laptop.png"}
      alt="Scatter Screenshot"
    />
  );
  const image2 = (
    <img
      className={classes["image-2"]}
      src={"./mockups/ASJH/mockup-phone.png"}
      alt="Scatter Screenshot"
    />
  );
  return (
    <div className={`${classes["image-1"]} ${classes["image-div-1"]}`}>
      <Slide direction="right" triggerOnce={true}>
        {image1}
      </Slide>
      <div className={`${classes["image-2"]} ${classes["image-div-2"]}`}>
        <Slide direction="right" triggerOnce={true}>
          {image2}
        </Slide>
      </div>
    </div>
  );
};
export default ASJHMockup;
