import Skill from "../../models/Skill";
import SkillItem from "./SkillItem";
import classes from "./SkillRow.module.css";

const SkillRow: React.FC<{
  skillList: Skill[];
  wrapped: boolean;
}> = (props) => {
  return (
    <div className={`${classes.row} ${props.wrapped ? classes.wraps : ""}`}>
      {props.skillList.map((skill) => (
        <SkillItem
          key={skill.name}
          skill={skill.name}
          icon={skill.icon}
          inRow={true}
        />
      ))}
    </div>
  );
};
export default SkillRow;
