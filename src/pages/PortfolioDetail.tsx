import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import ReactDOM from "react-dom";
import { useNavigate, useParams } from "react-router-dom";
import PortfolioDescription from "../components/groups/PortfolioDescription/PortfolioDescription";
import PortfolioDetailHeader from "../components/groups/PortfolioDetailHeader/PortfolioDetailHeader";
import PortfolioItems from "../components/groups/PortfolioItems/PortfolioItems";
import PortfolioVideos from "../components/groups/PortfolioVideos/PortfolioVideos";
import { projectDetails } from "../constants/projects";
import ProjectDetails from "../models/ProjectDetails";
import PortfolioDemo from "../components/groups/PortfolioDemo/PortfolioDemo";
import classes from "./PortfolioDetail.module.css";
import Modal from "../components/modal/Modal";

const PortfolioDetail: React.FC<{
  // removeDisplayedItem: () => void;
}> = (props) => {
  const params = useParams();
  const projectName = params.projectId;
  const [projectData, setProjectData] = useState<ProjectDetails | null>(null);
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate("/");
    // props.removeDisplayedItem();
  };
  useEffect(() => {
    if (projectName) {
      setProjectData(projectDetails[projectName]);
    }
  }, [projectName]);

  return (
    <Modal handleExit={handleGoBack}>
      <div>
        {projectData ? (
          <div className={classes.fullView}>
            <Fade duration={500} triggerOnce>
              <div className={classes["portfolio-detail-content"]}>
                <PortfolioDetailHeader
                  project={projectData}
                  handleGoBack={handleGoBack}
                />
                <PortfolioDescription project={projectData} />
                <br />
                <br />
                <br />
                <PortfolioVideos project={projectData} />
                {projectData && (
                  <>
                    <br />
                    <br />
                    <PortfolioDemo portfolioItem={projectData.id} />
                    <br />
                    <PortfolioItems portfolioItems={projectData.screenshots} />
                  </>
                )}
              </div>
            </Fade>
          </div>
        ) : (
          <div className={classes.fullView}>
            Page does not exist.
            <a className={classes["back-text"]} onClick={handleGoBack}>
              Go Back
            </a>
          </div>
        )}
      </div>
    </Modal>
  );
};
export default PortfolioDetail;
