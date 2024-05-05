import { ImageCardProps } from "./ImageCard.types";
const ImageCard: React.FC<ImageCardProps> = ({ image, onOpen }) => (
  <div>
    <img
      onClick={() =>
        onOpen({
          bigImage: image.urls.regular,
          imageDescription: image.description ?? "",
        })
      }
      src={image.urls.small || image.urls.regular}
      alt={image.description ?? ""}
    />
  </div>
);

export default ImageCard;
