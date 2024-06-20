// import css from './ImageCard.module.css'
export default function ImageCard({image, onClick}) {
      return (
      <div >
      <img src={image.urls.small} alt={image.alt_description} onClick={onClick}/> 
      </div>
    );
  }