import classes from "./ContactContent.module.css";
import Email from "../Button/Email/Email";
import SocialIcons from "../Socials/SocialIcons";
import Link from "../Button/Link/Link";

const ContactContent: React.FC<{}> = (props) => {
  return (
    <div className={classes["main-content"]}>
      <h2 className={classes["contact-header"]}>Let's get in touch!</h2>
      <h2 className={classes["contact-subheader"]}>
        Need a developer? Let's chat!
      </h2>
      <Email text="miguelaenlle@icloud.com" email="" />

      <SocialIcons
        socials={["github", "linkedin", "email"]}
        email="miguelaenlle@icloud.com"
      />
      <br />
      <Link text="Resume" link="" />
    </div>
  );
};
export default ContactContent;
