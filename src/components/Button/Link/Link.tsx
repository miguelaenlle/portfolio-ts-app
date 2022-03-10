import classes from "./Link.module.css"
import LinkIcon from "../../../svgs/LinkIcon";

const Link: React.FC<{ text: string; link: string; }> = (props) => {
    return (
        <div className = {classes["resume-row"]}>
            <p>{props.text}</p>
            <LinkIcon />
        </div>
    );
}
export default Link