import classes from "./ASJHMockup.module.css";
import AnimatedMockup from "./AnimatedMockup";
import { useState } from "react";

const ASJHMockup: React.FC<{}> = (props) => {
  const image1 = (
    <img
      className={classes["image-1"]}
      src={"/mockups/ASJH/mockup-laptop.png"}
      alt="Scatter Screenshot"
    />
  );
  const image2 = (
    <img
      className={classes["image-2"]}
      src={"/mockups/ASJH/mockup-phone.png"}
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
export default ASJHMockup;
