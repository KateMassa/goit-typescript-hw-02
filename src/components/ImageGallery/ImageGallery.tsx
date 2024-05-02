import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { ImageGalleryProps } from "./ImageGallery.types";

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
