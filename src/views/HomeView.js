import React from 'react';

const styles = {
  title: {
    marginTop: 100,
    fontWeight: 700,
    fontSize: 36,
  },
};

const HomeView = () => {
  return (
    <div>
      <h3 style={styles.title}>Welcome to my PhoneBook</h3>
    </div>
  );
};

export default HomeView;
