import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import Nav from './Nav';

const Header = (props) => {
  const { headTitle } = props;
  return (
    <div className="header-container">
      <div className="header-left-content">
        <h1>{headTitle}</h1>
        <ul>
          <Link to="/" className="linker">
            <Nav title="BOOKS" />
          </Link>
          <Link to="/categories" className="linker">
            <Nav title="CATEGORIES" />
          </Link>
        </ul>
      </div>
      <div className="header-right-content">
        <FaUser className="icon-color" />
      </div>
    </div>
  );
};

export default Header;

Header.propTypes = {
  headTitle: PropTypes.string.isRequired,
};
