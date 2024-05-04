import { Image } from "../App/App.types";

export type ImageGalleryProps = {
  images: Image[];
  openModal: (image: Image) => void;
};
