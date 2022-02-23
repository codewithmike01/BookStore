import React from 'react';

import PropTypes from 'prop-types';

const BookNameAuthor = (props) => {
  const { bookTitle, bookAuthor, bookCategory } = props;

  return (
    <div className="book-top-left-content">
      <p className="book-category">{bookCategory}</p>
      <h3>{bookTitle}</h3>
      <p className="book-author">{bookAuthor || ' '}</p>
    </div>
  );
};

BookNameAuthor.propTypes = {
  bookTitle: PropTypes.string.isRequired,
  bookCategory: PropTypes.string.isRequired,
  bookAuthor: PropTypes.string.isRequired,
};

export default BookNameAuthor;
