import classes from "./PortfolioItemSkills.module.css";
import Skill from "../../../models/Skill";
import SkillRow from "../../SkillDetail/SkillRow";

const PortfolioItemSkills: React.FC<{ skills: Skill[]; compact: boolean }> = (
  props
) => {
  return (
    <div
      className={`${classes.row} ${
        !props.compact ? classes["wide-row"] : classes["compact-row"]
      }`}
    >
      <SkillRow skillList={props.skills} />
    </div>
  );
};
export default PortfolioItemSkills;
