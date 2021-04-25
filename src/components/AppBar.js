import React from 'react';
import { useSelector } from 'react-redux';
import backHeader from '../images/backHeader.png';

import Navigation from './Navigation';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';
import { getIsAuthenticated } from '../redux/auth/auth-selectors';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundImage: `url(${backHeader})`,
    width: '100%',
    height: 75,
    paddingRight: 30,
    paddingLeft: 30,
  },
};

export default function AppBar() {
  const isLoggedIn = useSelector(getIsAuthenticated);

  return (
    <header style={styles.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}

// const mapStateToProps = state => ({
//   isAuthenticated: getIsAuthenticated(state),
// });

// export default connect(mapStateToProps)(AppBar);
