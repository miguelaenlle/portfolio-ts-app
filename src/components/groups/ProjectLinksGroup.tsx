import GoToIcon from "../icons/GoToIcon";
import VideoIcon from "../icons/VideoIcon";
import LinkIcon from "../icons/LinkIcon";

import ViewLink from "../buttons/ViewLink";
import classes from "./ProjectLinksGroup.module.css";

import { useContext } from "react";
import SizeContext from "../../context/size-context";
import LearnMoreButton from "../buttons/LearnMoreButton";

const ProjectLinksGroup: React.FC<{
  learnMore: string;
  appDemo: string | null;
  websiteDemo: string | null;
  testimonial: string | null;
}> = (props) => {
  const sizeCtx = useContext(SizeContext);
  const isLarge = sizeCtx.isLarge;
  return (
    <div className={isLarge ? classes["left-stack"] : ""}>
      <LearnMoreButton link={props.learnMore} />
      {!isLarge && <br />}
      {props.testimonial && (
        <ViewLink
          text={"Video Testimonial"}
          link={props.testimonial}
          reversed={false}
          icon={<LinkIcon />}
        />
      )}
      {props.appDemo && (
        <ViewLink
          text={"App Demo"}
          link={props.appDemo}
          reversed={false}
          icon={<LinkIcon />}
        />
      )}
      {props.websiteDemo && (
        <ViewLink
          text={"Website Demo"}
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
