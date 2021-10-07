import { Badge } from "@material-ui/core";
import "./SingleContent.css";
import ContentModal from "../ContentModal/ContentModal";

const SingleContent = ({
  id,
  title,
  status,
    image,
  gender,
  species,
}) => {
  return (
    <ContentModal id={id}>
      <Badge
        badgeContent={status}
        color={status === "Alive"  ? "primary"
            : status === "Dead" ? "error" : "secondary"}
      />

                 <img
        className="image"
        src={image}
        alt={title}
      />
      <b className="title">{title}</b>
      <span className="subTitle">
        <span className="subTitle">{gender}</span>
        <span className="subTitle">{species}</span>

      </span>
    </ContentModal>
  );
};

export default SingleContent;
