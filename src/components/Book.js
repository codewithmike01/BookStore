import React from 'react';
import PropTypes from 'prop-types';
import BookProgressBar from './BookProgressBar';
import UpdatePrgress from './UpdateProgress';

const Book = (props) => {
  const {
    bookTitle, bookAuthor, bookCategory, progressPercent, chapter,
  } = props;
  return (
    <div className="book-container">
      <div className="book-left-content">
        <div className="book-top-left-content">
          <p className="book-category">{bookCategory}</p>
          <h3>{bookTitle}</h3>
          <p className="book-author">{bookAuthor}</p>
        </div>
        <div className="book-left-bottom-content">
          <button type="button">Comment </button>
          {' '}
          <span className="button-separator">| </span>
          <button type="button">Remove </button>
          {' '}
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
  bookTitle: PropTypes.string.isRequired,
  bookCategory: PropTypes.string.isRequired,
  bookAuthor: PropTypes.string.isRequired,
  chapter: PropTypes.string.isRequired,
  progressPercent: PropTypes.string.isRequired,
};

export default Book;
