import { Image } from "../App/App.types";

export interface ImageCardProps {
  image: Image;
  onOpen: (imageData: { bigImage: string; imageDescription: string }) => void;
}
