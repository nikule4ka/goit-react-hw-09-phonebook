import React from 'react';
import { NavLink } from 'react-router-dom';

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

const AuthNav = () => {
  return (
    <div>
      <NavLink exact to="/register" style={styles.link} activeStyle={styles.activeLink}>
        Registration
      </NavLink>
      <NavLink exact to="/login" style={styles.link} activeStyle={styles.activeLink}>
        Log in
      </NavLink>
    </div>
  );
};

export default AuthNav;
