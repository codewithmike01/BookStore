import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteBook } from '../redux/books/books';
import BookProgressBar from './BookProgressBar';
import UpdatePrgress from './UpdateProgress';
import BookNameAuthor from './BookNameAuthor';

const Book = (props) => {
  const { progressPercent, chapter } = props;
  const { bookTitle, bookAuthor, bookCategory } = props;
  const { id } = props;

  const dispatch = useDispatch();

  const removeFromStore = (idTag) => {
    dispatch(deleteBook(idTag));
  };

  return (
    <div className="book-container">
      <div className="book-left-content">
        <BookNameAuthor
          bookTitle={bookTitle}
          bookAuthor={bookAuthor || ''}
          bookCategory={bookCategory}
        />
        <div className="book-left-bottom-content">
          <button type="button">Comment </button>
          <span className="button-separator">| </span>
          <button type="button" onClick={() => removeFromStore(id)}>
            Remove
          </button>
          <span className="button-separator">| </span>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="book-right-content">
        <BookProgressBar progress={progressPercent} />
        <div className="line" />
        <UpdatePrgress title={chapter} />
      </div>
    </div>
  );
};

Book.propTypes = {
  chapter: PropTypes.string.isRequired,
  progressPercent: PropTypes.string.isRequired,
  bookTitle: PropTypes.string.isRequired,
  bookCategory: PropTypes.string.isRequired,
  bookAuthor: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
