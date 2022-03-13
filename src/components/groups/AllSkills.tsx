import { useContext } from "react";
import { Fade } from "react-awesome-reveal";
import { skills } from "../../constants/skills-main";
import SizeContext from "../../context/size-context";
import classes from "./AllSkills.module.css";
import SkillRow from "./SkillRow";

const AllSkills: React.FC<{}> = (props) => {
  const sizeCtx = useContext(SizeContext);
  const isLarge = sizeCtx.isLarge;
  return (
    <Fade delay={isLarge ? 900 : 0} triggerOnce>
      <div>
        {Object.keys(skills).map((skillGroup) => (
          <div key={`row_${skillGroup}`} className={classes["skill-row"]}>
            <p
              key={`header_${skillGroup}`}
              className={classes["skill-group-header-text"]}
            >
              {skillGroup}
            </p>
            <SkillRow
              key={skillGroup}
              skillList={skills[skillGroup]}
              wrapped={isLarge}
            />
          </div>
        ))}
      </div>
    </Fade>
  );
};
export default AllSkills;
