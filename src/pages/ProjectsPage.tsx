import classes from "./ProjectsPage.module.css"
import PortfolioContent from "../components/Portfolio/PortfolioContent";

const ProjectsPage: React.FC<{}> = (props) => {
    return (
        <div className = {classes["portfolio-container"]}>
            <PortfolioContent />
        </div>
    );
}
export default ProjectsPage