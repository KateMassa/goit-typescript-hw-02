import { Image } from "../App/App.types";

export type ImageGalleryProps = {
  images: Image[];
  openModal: (imageData: {
    bigImage: string;
    imageDescription: string;
  }) => void;
};
