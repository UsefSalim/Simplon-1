import React from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import Newsletter from '../components/Newsletter';
const service = () => {
  return (
    <div className="container">
      <Navigation></Navigation>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </div>
  );
};

export default service;