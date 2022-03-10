import AboutContent from "../components/About/AboutContent";
import AboutBackground from "../components/About/AboutBackground";
import classes from "./AboutPage.module.css"

const AboutPage: React.FC<{}> = (props) => {
  return (
    <div className = {classes["content-wrapper"]}>
      <AboutContent />
      <AboutBackground />
    </div>
  );
};
export default AboutPage;
