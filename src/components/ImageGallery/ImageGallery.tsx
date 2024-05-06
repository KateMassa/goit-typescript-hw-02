import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { Image } from "../App/App.types";

type ImageGalleryProps = {
  images: Image[];
  openModal: (image: Image) => void;
};

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, openModal }) => (
  <ul className={css.galleryList}>
    {images.map((image) => (
      <li className={css.galleryListItem} key={image.id}>
        <ImageCard image={image} onOpen={openModal} />
      </li>
    ))}
  </ul>
);

export default ImageGallery;
