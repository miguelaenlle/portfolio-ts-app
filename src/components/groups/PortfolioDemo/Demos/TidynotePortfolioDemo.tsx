import { useState } from "react";
import classes from "./Demos.module.css";
import PortfolioDemoButton from "../PortfolioDemoButton";

const TidynotePortfolioDemo: React.FC<{}> = (props) => {
  const [adminSiteDemoOpen, setAdminDemoOpen] = useState(false);
  const [userSiteDemoOpen, setUserDemoOpen] = useState(false);

  const handleToggleAdminDemo = () => {
    setAdminDemoOpen(!adminSiteDemoOpen);
  };

  const handleToggleUserDemo = () => {
    setUserDemoOpen(!userSiteDemoOpen);
  };

  const youtubeVideo = "https://www.youtube.com/watch?v=S-Pudcpqsjk";
  const appStoreLink = "https://apps.apple.com/us/app/tidynoteapp/id1588417206";
  const demoEmail = "johndoe5@stu.d214.org";
  const demoPassword = "123456";

  return (
    <div>
      <PortfolioDemoButton
        appDemoText={"App Demo (App Store)"}
        handleClick={handleToggleUserDemo}
      />
      {userSiteDemoOpen && (
        <div className={classes["instruction-content"]}>
          <ol>
            <li>
              Download the app from the{" "}
              <a href={appStoreLink} target="_blank">
                App Store
              </a>{" "}
              (for iPad and iPhone)
            </li>
            <li>
              Log in as a student with the email address <i>{demoEmail}</i> and
              password <i>{demoPassword}</i>
            </li>
          </ol>
          <br />
        </div>
      )}

      <PortfolioDemoButton
        appDemoText={"Admin Site Demo"}
        handleClick={handleToggleAdminDemo}
      />

      {adminSiteDemoOpen && (
        <p className={classes["instruction-content"]}>
          <ul>
            <li>
              Admin site access is unavailable because sensitive information is
              stored on the site. <br />
            </li>
            <li>
              However, here is a{" "}
              <a href={youtubeVideo} target={"_blank"}>
                demo video
              </a>{" "}
              showcasing the admin site functionality.
            </li>
          </ul>
          <br />
        </p>
      )}
    </div>
  );
};
export default TidynotePortfolioDemo;
