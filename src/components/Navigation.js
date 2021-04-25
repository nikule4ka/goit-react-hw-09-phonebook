import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getIsAuthenticated } from '../redux/auth/auth-selectors';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 400,
    fontSize: 20,
    color: '#2A363B',
  },
  activeLink: {
    color: '#495939',
  },
};

export default function Navigation() {
  const isLoggedin = useSelector(getIsAuthenticated);

  return (
    <nav>
      <NavLink exact to="/" style={styles.link} activeStyle={styles.activeLink}>
        Home
      </NavLink>

      {isLoggedin && (
        <NavLink to="/contacts" style={styles.link} activeStyle={styles.activeLink}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
}

Navigation.defaultProps = {
  isLoggedin: false,
};

Navigation.propTypes = {
  isLoggedin: PropTypes.bool,
};
