import { useState } from "react";
import classes from "./Demos.module.css";
import PortfolioDemoButton from "../PortfolioDemoButton";

const ASJHDemo: React.FC<{}> = (props) => {
  const [adminSiteDemoOpen, setAdminDemoOpen] = useState(false);
  const [userSiteDemoOpen, setUserDemoOpen] = useState(false);

  const handleToggleAdminDemo = () => {
    setAdminDemoOpen(!adminSiteDemoOpen);
  };

  const handleToggleUserDemo = () => {
    setUserDemoOpen(!userSiteDemoOpen);
  };

  const adminSite = "https://asjh-formbuilder-demo.web.app/editor";
  const userSite = "https://asjh-formbuilder-demo.web.app/form";
  const demoPassword = "testpassword";
  const demoAdminEmail = "admin@admin.com"
  const demoAdminPassword = "123456"

  return (
    <div>
      <PortfolioDemoButton
        appDemoText={"Applicant Demo"}
        handleClick={handleToggleUserDemo}
      />
      {userSiteDemoOpen && (
        <div className={classes["instruction-content"]}>
          <ol>
            <li>
              Go to the{" "}
              <a href={userSite} target="_blank">
                Form Website
              </a>{" "} demo
            </li>
        
            <li>
              Access the form with password <i>{demoPassword}</i>
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
          <ol>
            <li>
              Go to the{" "}
              <a href={adminSite} target="_blank">
                Admin Website
              </a>{" "}
              demo
              (laptop/desktop only)
            </li>
            <li>
              Log in with the email <i>{demoAdminEmail}</i> and the password <i>{demoAdminPassword}</i> 
            </li>
          </ol>
          <br />
        </p>
      )}
    </div>
  );
};
export default ASJHDemo;
