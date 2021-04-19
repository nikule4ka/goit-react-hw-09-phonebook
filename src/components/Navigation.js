import React from 'react';
import { connect } from 'react-redux';
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

const Navigation = ({ isAuthenticated }) => {
  return (
    <nav>
      <NavLink exact to="/" style={styles.link} activeStyle={styles.activeLink}>
        Home
      </NavLink>

      {isAuthenticated && (
        <NavLink to="/contacts" style={styles.link} activeStyle={styles.activeLink}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

Navigation.defaultProps = {
  isAuthenticated: false,
};

Navigation.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
