import React from 'react';

import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import Newsletter from '../components/Newsletter';
import Section from '../components/Service/Section';

const service = () => {
  return (
    <div className="container">
      <Navigation />
      <Newsletter />
      <Section />
      <Footer />
    </div>
  );
};

export default service;