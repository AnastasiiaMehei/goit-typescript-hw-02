import React from "react";

interface ImageUrls {
  small: string;
}

interface Image {
  urls: ImageUrls;
  alt_description: string;
}

interface ImageCardProps {
  image: Image;
  onClick: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onClick }) => {
  return (
    <div>
      <img src={image.urls.small} alt={image.alt_description} onClick={onClick} />
    </div>
  );
};

export default ImageCard;
