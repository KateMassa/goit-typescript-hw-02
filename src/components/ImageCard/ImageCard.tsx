import { ImageCardProps } from "./ImageCard.types";
const ImageCard: React.FC<ImageCardProps> = ({ image, onOpen }) => (
  <div>
    <img
      onClick={() =>
        onOpen({
          bigImage: image.urls.regular,
          imageDescription: image.alt_description ?? "",
        })
      }
      src={image.urls.small || image.urls.regular}
      alt={image.alt_description ?? ""}
    />
  </div>
);

export default ImageCard;
