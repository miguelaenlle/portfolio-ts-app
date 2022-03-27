import classes from "./PortfolioVideos.module.css"
import ProjectDetails from "../../../models/ProjectDetails";
import VideoEmbed from "./VideoEmbed";

const PortfolioVideos: React.FC<{ project: ProjectDetails }> = (props) => {
  return (
    <div className = {classes["portfolio-items"]}>
      {props.project.videos.map((videoUrl, index) => {
        return (
          <div key = {`video-embed-${index}-wrapper`}>
            <VideoEmbed key={`video-embed-${index}`} embedID={videoUrl} />
          </div>
        );
      })}
    </div>
  );
};
export default PortfolioVideos;
