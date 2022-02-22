import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const BookProgressBar = (props) => {
  const { progress } = props;
  return (
    <div className="progress">
      <div className="circular-progress-bar">
        <CircularProgressbar value={parseInt(progress, 10)} />
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
