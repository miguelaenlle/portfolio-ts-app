import classes from "./VideoEmbed.module.css"
const VideoEmbed: React.FC<{ embedID: string }> = (props) => {
  return (
    <div className={classes["video-responsive"]}>
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${props.embedID}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
};
export default VideoEmbed;
