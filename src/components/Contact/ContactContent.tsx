import classes from "./ContactContent.module.css";
import AboutBackground from "../About/AboutBackground";
const ContactContent: React.FC<{}> = (props) => {
    return (
        <div className = {classes["main-content"]}>
            <AboutBackground />
        </div>
    );
}
export default ContactContent