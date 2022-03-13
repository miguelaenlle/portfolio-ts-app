import SectionHeader from "../components/text/SectionHeader";
import Wrapper from "./Wrapper";
import { projects } from "../constants/projects";
import ProjectGroup from "../components/groups/ProjectGroup";
import classes from "./Work.module.css";
import React from "react";

const Work: React.FC = (props) => {
  return (
    <div className={classes["main-content"]}>
      <Wrapper compact={true}>
        <SectionHeader content={"Projects"} hasLine={true} />
        {projects.map((project) => (
          <ProjectGroup key={project.name} project={project} />
        ))}
      </Wrapper>
    </div>
  );
};
export default Work;
