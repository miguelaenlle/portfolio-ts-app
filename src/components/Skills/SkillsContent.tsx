import classes from "./SkillsContent.module.css";
import HeaderText from "../Text/Header/HeaderText";
import PageDivider from "../Text/Header/PageDivider";
import SkillList from "./SkillList";

const SkillsContent: React.FC<{}> = (props) => {
  return (
    <div className={classes.background}>
      <div className={classes["divider"]}>
        <PageDivider />
      </div>
      <HeaderText text="Skills" />
      <SkillList />
      <br />
      <div className={classes["divider"]}>
        <PageDivider />
      </div>
    </div>
  );
};
export default SkillsContent;
