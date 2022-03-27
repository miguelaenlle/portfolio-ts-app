import { useState } from "react";
import AnimatedMockup from "./AnimatedMockup";
import classes from "./ScatterMockup.module.css";
const ScatterMockup: React.FC<{}> = (props) => {
  const image1 = (
    <img
      className={classes["image-1"]}
      src={"/mockups/Scatter/mockup-laptop.png"}
      alt="Scatter Screenshot"
    />
  );
  const image2 = (
    <img
      className={classes["image-2"]}
      src={"/mockups/Scatter/mockup-phone.png"}
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
export default ScatterMockup;
