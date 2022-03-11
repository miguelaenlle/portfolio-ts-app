import classes from "./SkillContainer.module.css";
const SkillContainer: React.FC<{text: string;}> = (props) => {
    return (
        <div className = {classes["skill-container"]}>
            <p className = {classes["sub-header"]}>{props.text}</p>
            {props.children}
        </div>
    );
}
export default SkillContainer