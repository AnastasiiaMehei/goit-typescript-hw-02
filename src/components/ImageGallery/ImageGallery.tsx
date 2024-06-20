import css from './ImageGallery.module.css'
import ImageCard from "../ImageCard/ImageCard";
import { Image } from '../types';
import { FC } from 'react';
interface ImageGalleryProps {
  images: Image[]; 
  onImageClick: (image: Image) => void;
}
export const ImageGallery: FC<ImageGalleryProps> = ({images, onImageClick}) => {
  return (
    <ul className={css.imageGallery}>
      {images.map((image, index) => (
        <li className={css.li} key={index}>
          <ImageCard image={image}   onClick={() => onImageClick(image)}/>
        </li>
      ))}
    </ul>
  );
}
