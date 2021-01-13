import React from 'react';
import Navigation from '../components/Navigation';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const home = () => {
  return (
    <div className="container">
      <Navigation></Navigation>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </div>
  );
};

export default home;