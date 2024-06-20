import { MouseEvent } from 'react';
import css from './LoadMoreBtn.module.css';
interface LoadMoreBtnProps {
  onMoreClick: (event: MouseEvent<HTMLButtonElement>) => void; 
}
const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onMoreClick }) => {
  return (
    <button className={css.btn} type="button" onClick={onMoreClick}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;