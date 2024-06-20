import css from './ImageGallery.module.css'
import ImageCard from "../ImageCard/ImageCard";
export default function ImageGallery({images, onImageClick}) {
  console.log(images);

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
