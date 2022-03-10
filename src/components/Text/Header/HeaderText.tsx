import classes from "./HeaderText.module.css"

const HeaderText: React.FC<{text: string}> = (props) => {
    return (
        <div className = {classes["header-row"]}>
            <h2 className = {classes["header-text"]}>{props.text}</h2>
        </div>
    );
}
export default HeaderText