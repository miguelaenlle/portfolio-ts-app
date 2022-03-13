import classes from "./Skills.module.css";
import React from "react";
import AllSkills from "../components/groups/AllSkills";
import SectionHeader from "../components/text/SectionHeader";
import Wrapper from "./Wrapper";

const Skills: React.FC = (props) => {
  return (
    <div className = {classes["main-content"]}>
      <Wrapper compact={false}>
        <SectionHeader content={"Skills"} hasLine={true} />
        <br />
        <AllSkills />
      </Wrapper>
    </div>
  );
};
export default Skills;
