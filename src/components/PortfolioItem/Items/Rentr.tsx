import classes from "./ASJH.module.css";
import PortfolioItem from "../PortfolioItem";
import PageDivider from "../../Text/Header/PageDivider";
import { asjhSkills } from "../../../constants/skills";
import RentrMockup from "../Mockups/RentrMockup";
const Rentr: React.FC<{}> = (props) => {
  return (
    <>
      <br />
      <br />
      <br />
      <PortfolioItem
        header="Peer-to-Peer Rentals Platform"
        description={[
          "Led team of freelancers to build peer-to-peer rentals platform",
          "Developed Swift app based off Adobe XD designs",
          "Developed application backend with Firebase and Algolia",
          "Developed payments infrastructure using Stripe Payments, Bank Payouts, and Google Cloud"
        ]}
        buttons={[
          { buttonType: "app", redirect: "" },
        ]}
        skills={asjhSkills}
        location="Remote"
        occupation="Cofounder"
        startDate="January 2021"
        endDate="April 2022"
        mockup={<RentrMockup />}
        compact={false}
      />
      <br />

       

      <div className={classes.separator}></div>



    </>
  );
};
export default Rentr;
