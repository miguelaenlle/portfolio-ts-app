import classes from "./TidynoteMockup.module.css";
import { Slide } from "react-awesome-reveal";
import AnimatedMockup from "./AnimatedMockup";
import { useState } from "react";

const TidynoteMockup: React.FC<{}> = (props) => {
  const image1 = (
    <img
      className={classes["image-1"]}
      src={"/mockups/Tidynote/mockup-desktop.png"}
      alt="Scatter Screenshot"
    />
  );
  const image2 = (
    <img
      className={classes["image-2"]}
      src={"/mockups/Tidynote/mockup-tablet.png"}
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
export default TidynoteMockup;
