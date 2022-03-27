import { useState } from "react";
import classes from "./Demos.module.css";
import PortfolioDemoButton from "../PortfolioDemoButton";
import MockupID from "../../../icons/MockupID";

const ScatterDemo: React.FC<{}> = (props) => {
  const [adminSiteDemoOpen, setAdminDemoOpen] = useState(false);
  const [userSiteDemoOpen, setUserDemoOpen] = useState(false);

  const handleToggleAdminDemo = () => {
    setAdminDemoOpen(!adminSiteDemoOpen);
  };

  const handleToggleUserDemo = () => {
    setUserDemoOpen(!userSiteDemoOpen);
  };

  const adminSite = "https://scatterdemo.web.app/";
  const testflightSite = "https://testflight.apple.com/join/JoCkb5cN";
  const demoAdminEmail = "admin@admin.com"
  const demoAdminPassword = "123456"

  return (
    <div>
      <PortfolioDemoButton
        appDemoText={"App Demo"}
        handleClick={handleToggleUserDemo}
      />
      {userSiteDemoOpen && (
        <div className={classes["instruction-content"]}>
          <ol>
            <li>
              Download the{" "}
              <a href={testflightSite} target="_blank">
                Scatter Demo TestFlight
              </a>{" "} 
            </li>
        
            <li>
              Log in with the email <i>{demoAdminEmail}</i> and the password <i>{demoAdminPassword}</i> 
            </li>
            <li>
                Scan this demo ID card:
                <MockupID />
            </li>
          </ol>
          <br />
        </div>
      )}

      <PortfolioDemoButton
        appDemoText={"Website Demo"}
        handleClick={handleToggleAdminDemo}
      />

      {adminSiteDemoOpen && (
        <p className={classes["instruction-content"]}>
          <ol>
            <li>
              Go to the{" "}
              <a href={adminSite} target="_blank">
                Scatter Demo Site
              </a>{" "}
              
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
export default ScatterDemo;
