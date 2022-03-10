import AboutPage from "./AboutPage";
import ProjectsPage from "./ProjectsPage";
import SkillsPage from "./SkillsPage";
import ContactPage from "./ContactPage";

const MainPage: React.FC<{}> = (props) => {
    return (
        <div>
            <AboutPage />
            <ProjectsPage />
            <SkillsPage />
            <ContactPage />
        </div>
    );
}
export default MainPage