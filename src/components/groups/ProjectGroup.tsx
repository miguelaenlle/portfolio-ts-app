import { useContext } from "react";
import { Fade } from "react-awesome-reveal";
import SizeContext from "../../context/size-context";
import Project from "../../models/Project";
import HrLine from "../text/HrLine";
import Mockup from "./Mockup";
import SkillRow from "./SkillRow";
import classes from "./ProjectGroup.module.css";
import ProjectLinksGroup from "./ProjectLinksGroup";

const ProjectGroup: React.FC<{ project: Project }> = (props) => {
  const sizeCtx = useContext(SizeContext);
  const isLarge = sizeCtx.isLarge;

  const mockup = <Mockup mockup={props.project.id} />;

  return (
    <>
      <div
        className={`${
          isLarge && props.project.right !== null ? classes["left-stack"] : ""
        }`}
      >
        {props.project.right && isLarge && mockup}
        {(!isLarge || props.project.right === null) && mockup}

        <div
          className={
            props.project.right === null
              ? `${
                  isLarge
                    ? classes["project-wrapper"]
                    : classes["project-wrapper-small"]
                }
          ${
            props.project.right ? classes["right-based"] : classes["left-based"]
          }`
              : ""
          }
        >
          <h2 className={classes["header-text"]}>{props.project.name}</h2>
          <Fade>
            <p className={classes["text"]}>{props.project.description}</p>
          </Fade>

          <ProjectLinksGroup
            learnMore={props.project.learnMoreLink}
            appDemo={props.project.appDemoLink}
            websiteDemo={props.project.webDemoLink}
            testimonial={props.project.testimonialLink}
            centered={false}
          />

          <SkillRow
            key={`skills-${Math.random().toString()}`}
            skillList={props.project.skills}
            wrapped={true}
            compactSizing={false}
          />
          {!isLarge && <br />}
        </div>
        {props.project.right === false && isLarge && mockup}
      </div>
      <HrLine />
    </>
  );
};
export default ProjectGroup;
