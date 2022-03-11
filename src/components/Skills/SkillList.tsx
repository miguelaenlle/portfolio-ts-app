import classes from "./SkillList.module.css";
import SkillContainer from "../SkillDetail/SkillContainer";
import SkillRow from "../SkillDetail/SkillRow";
import { skills } from "../../constants/skills";

const SkillList: React.FC = () => {
  return (
    <div className={classes["skill-list"]}>
      {Object.keys(skills).map((skillGroup) => (
        <SkillContainer text={skillGroup}>
          <br />
          <SkillRow key={skillGroup} skillList={skills[skillGroup]} />
        </SkillContainer>
      ))}
    </div>
  );
};
export default SkillList;
