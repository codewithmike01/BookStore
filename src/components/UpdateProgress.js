import React from 'react';
import PropTypes from 'prop-types';

const UpdatePrgress = (props) => {
  const { title } = props;
  return (
    <div className="update-progress-container">
      <div className="update-progress-left-content">
        <p>CURRENT CHAPTER</p>
        <h5>{title}</h5>
      </div>
      <button type="button">UPDATE PROGRESS</button>
    </div>
  );
};

UpdatePrgress.propTypes = {
  title: PropTypes.string.isRequired,
};
export default UpdatePrgress;
