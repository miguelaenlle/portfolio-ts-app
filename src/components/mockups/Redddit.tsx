import { useState } from "react";
import AnimatedMockup from "./AnimatedMockup";
import classes from "./ScatterMockup.module.css";
const ReddditMockup: React.FC<{}> = (props) => {
  const image1 = (
    <img
      className={classes["image-1"]}
      src={"/mockups/Redddit/mockup-1.png"}
      alt="Scatter Screenshot"
    />
  );
  const image2 = (
    <img
      className={classes["image-2"]}
      src={"/mockups/Redddit/mockup-2.png"}
      alt="Scatter Screenshot"
    />
  );
  const [animationRan, setAnimationRan] = useState(false);
  const handleAnimationRan = () => {
    setAnimationRan(true);
  };
  return (
    <AnimatedMockup
      animationRan={animationRan}
      handleAnimated={handleAnimationRan}
    >
      <div className={`${classes["image-1"]} ${classes["image-div-1"]}`}>
        {image1}
        <AnimatedMockup
          animationRan={animationRan}
          handleAnimated={handleAnimationRan}
        >
          <div className={`${classes["image-2"]} ${classes["image-div-2"]}`}>
            {image2}
          </div>
        </AnimatedMockup>
      </div>
    </AnimatedMockup>
  );
};
export default ReddditMockup;
