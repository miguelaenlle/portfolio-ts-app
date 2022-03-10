import classes from "./ContactPage.module.css";

import ContactContent from "../components/Contact/ContactContent";
import AboutBackground from "../components/About/AboutBackground";

const ContactPage: React.FC<{}> = (props) => {
  return (
    <div className={classes["contact-page"]}>
      <ContactContent />
      <AboutBackground />
    </div>
  );
};
export default ContactPage;
