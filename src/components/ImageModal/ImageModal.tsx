import css from './ImageModal.module.css'
import Modal from 'react-modal';
Modal.setAppElement('#root');

export default function ImageModal({isOpen, onRequestClose, selectedImage}){
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