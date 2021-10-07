import "./SingleContent.css";
import EpisodeContentModal from "../ContentModal/EpisodeContentModal";

const WithoutPic = ({
  id,
  name,
  air_date,
  episode,
}) => {
  return (
    <EpisodeContentModal id={id}>
      <b className="title">{name}</b>
      <span className="subTitle">
        <span className="subTitle">{air_date}</span>
        <span className="subTitle">{episode}</span>

      </span>
    </EpisodeContentModal>
  );
};

export default WithoutPic;
