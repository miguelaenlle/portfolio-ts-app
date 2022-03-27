import { useLayoutEffect, useRef } from "react";
import classes from "./AnimatedMockup.module.css";

const AnimatedMockup: React.FC<{
  animationRan: boolean;
  handleAnimated: () => void;
}> = (props) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const onScroll = () => {
    if (elementRef.current && !props.animationRan) {
      const topPos = elementRef.current.getBoundingClientRect().top;
      // issue: the first element animates but the second element doesn't
      // this is because the second element triggers after the first element
      // how to fix

      if (topPos < window.innerHeight) {
        props.handleAnimated();
      }
    }
  };
  useLayoutEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={props.animationRan ? classes.animated : classes.transparent}
      ref={elementRef}
    >
      {props.children}
    </div>
  );
};
export default AnimatedMockup;
