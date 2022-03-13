import { useContext } from "react";
import SizeContext from "../../context/size-context";
import ASJHMockup from "../mockups/ASJHMockup";
import RentrMockup from "../mockups/RentrMockup";
import ScatterMockup from "../mockups/ScatterMockup";
import TidynoteMockup from "../mockups/TidynoteMockup";
import classes from "./Mockup.module.css";

const Mockup: React.FC<{ mockup: string  }> = (props) => {
  const sizeCtx = useContext(SizeContext);
  const isLarge = sizeCtx.isLarge;

  return (
    <div className={classes["content-wrapper"]}>
      {props.mockup === "rentr" && <RentrMockup />}
      {props.mockup === "asjh" && <ASJHMockup />}
      {props.mockup === "scatter" && <ScatterMockup />}
      {props.mockup === "tidynote" && <TidynoteMockup />}
    </div>
  );
};
export default Mockup;
