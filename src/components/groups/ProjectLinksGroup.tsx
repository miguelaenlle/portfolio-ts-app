import { useContext } from "react";
import SizeContext from "../../context/size-context";
import LearnMoreButton from "../buttons/LearnMoreButton";
import ViewLink from "../buttons/ViewLink";
import LinkIcon from "../icons/LinkIcon";
import classes from "./ProjectLinksGroup.module.css";



const ProjectLinksGroup: React.FC<{
  learnMore: string | null;
  appDemo: string | null;
  websiteDemo: string | null;
  testimonial: string | null;
  centered: boolean;
}> = (props) => {
  const sizeCtx = useContext(SizeContext);
  const isLarge = sizeCtx.isLarge;
  return (
    <div
      className={`${isLarge ? classes["left-stack"] : ""} ${
        props.centered ? classes["centered"] : ""
      }`}
    >
      {props.learnMore && <LearnMoreButton link={props.learnMore} />}
      {!isLarge && <br />}
      {props.testimonial && (
        <ViewLink
          text={`Video Testimonial ${!props.learnMore ? "(Youtube)" : ""}`}
          link={props.testimonial}
          reversed={false}
          icon={<LinkIcon />}
        />
      )}
      {props.appDemo && (
        <ViewLink
          text={`App Demo ${!props.learnMore ? "(TestFlight)" : ""}`}
          link={props.appDemo}
          reversed={false}
          icon={<LinkIcon />}
        />
      )}
      {props.websiteDemo && (
        <ViewLink
          text={`Website Demo ${!props.learnMore ? "(Laptop/Desktop)" : ""}`}
          link={props.websiteDemo}
          reversed={false}
          icon={<LinkIcon />}
        />
      )}
      {!isLarge && <br />}
    </div>
  );
};
export default ProjectLinksGroup;
