import { useState } from "react";
import AnimatedMockup from "./AnimatedMockup";
import classes from "./RentrMockup.module.css";

const RentrMockup: React.FC<{}> = (props) => {
  const image1 = (
    <img
      className={classes["image-1"]}
      src={"/mockups/Rentr/mockup-1.png"}
      alt="Rentr Screenshot"
    />
  );
  const image2 = (
    <img
      className={classes["image-2"]}
      src={"/mockups/Rentr/mockup-2.png"}
      alt="Rentr Screenshot"
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
      <div className={`${classes["image-div-1"]} ${classes["image-1"]}`}>
        {image1}
        <AnimatedMockup
          animationRan={animationRan}
          handleAnimated={handleAnimationRan}
        >
          <div className={`${classes["image-div-2"]} ${classes["image-2"]}`}>
            {image2}
          </div>
        </AnimatedMockup>
      </div>
    </AnimatedMockup>
  );
};
export default RentrMockup;
