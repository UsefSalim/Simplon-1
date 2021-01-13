import React from 'react';
// import '../styles/css/about.css'
import Navigation from '../components/Navigation';
import Newsletter from '../components/Newsletter';
import Main from '../components/About/Main';
import Footer from '../components/Footer';

const about = () => {
  return (
    <div className="container">
      <Navigation></Navigation>
      <Newsletter></Newsletter>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
};

export default about;