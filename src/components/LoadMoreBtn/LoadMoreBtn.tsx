import css from './LoadMoreBtn.module.css';

function LoadMoreBtn({ onMoreClick }) {
  return (
    <button className={css.btn} type="button" onClick={onMoreClick}>
      Load more
    </button>
  );
}

export default LoadMoreBtn;