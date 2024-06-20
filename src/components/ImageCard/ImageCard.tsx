import React from "react";
import { Image } from "../types";


interface ImageCardProps {
  image: Image;
  onClick: () => void;
}

export const ImageCard: React.FC<ImageCardProps> = ({ image, onClick }) => {
  return (
    <div>
      <img src={image.urls.small} alt={image.alt_description} onClick={onClick} />
    </div>
  );
};

export default ImageCard;
