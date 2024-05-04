import { Image } from "../App/App.types";

export interface ImageModalProps {
  image: Image;
  isOpen: boolean;
  bigImage: string;
  imageDescription: string;
  onClose: () => void;
}
