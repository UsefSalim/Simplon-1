import React from 'react';
import '../styles/css/index.css'
import Navigation from '../components/Navigation';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Header from '../components/Home/Header';
import Section from '../components/Home/Section';

const home = () => {
  return (
    <div className="container">
      <Navigation></Navigation>
      <Header></Header>
      <Newsletter></Newsletter>
      <Section></Section>
      <Footer></Footer>
    </div>
  );
};

export default home;