import css from './ImageModal.module.css'
import Modal from 'react-modal';

export interface SelectedImage {
    urls: {
      full: string;
    };
    alt_description?: string; 
  }
  
  interface ImageModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    selectedImage: SelectedImage;
  }
export const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onRequestClose, selectedImage }) => {
    return(
        <>
        <Modal
className={css.modal}  
overlayClassName={css.overlay}     
isOpen={isOpen}
onRequestClose={onRequestClose}
contentLabel="Example Modal"><img src={selectedImage.urls.full} alt={selectedImage.alt_description}/> 

      </Modal>
        </>
    )
}