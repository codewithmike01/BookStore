import React from 'react';
import PropTypes from 'prop-types';

const Nav = (props) => {
  const { title } = props;
  return <li className="nav-link">{title}</li>;
};

Nav.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Nav;
