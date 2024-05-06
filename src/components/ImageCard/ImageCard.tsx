import { Image } from "../App/App.types";

type ImageCardProps = {
  image: Image;
  onOpen: (imageData: { bigImage: string; imageDescription: string }) => void;
};
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
