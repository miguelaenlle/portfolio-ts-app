import classes from "./MockupID.module.css"
const MockupID: React.FC<{}> = (props) => {
    return (
        <div className = {classes["mockup-id"]}>
            <img className = {classes["mockup-img"]} src = "/screenshots/Scatter/mockup-id.png" />
        </div>
    );
}
export default MockupID