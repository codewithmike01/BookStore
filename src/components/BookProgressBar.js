import React from 'react';
import PropTypes from 'prop-types';

const BookProgressBar = (props) => {
  const { progress } = props;
  return (
    <div className="progress">
      <div className="circle">
        <div className="inner" />
        <div className="bar left">
          <div className=" oval-progress-left" />
        </div>

        <div className="bar right">
          <div className="oval-progress-right" />
        </div>
      </div>
      <div className="progress-text">
        <h4>{progress}</h4>
        <p>Completed</p>
      </div>
    </div>
  );
};

BookProgressBar.propTypes = {
  progress: PropTypes.string.isRequired,
};

export default BookProgressBar;
