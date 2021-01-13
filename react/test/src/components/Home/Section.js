import React from 'react';

import Image from '../../images/html5.png'

const Langages = ({ img }) => {
  return (
    <article>
      <img src={img} alt="" />
      <h3>HTML5 Markup</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, vel.consectetur adipisicing elit.
      Dolorem, vel.
          </p>
    </article>
  );
};
const Section = () => {
  return (
    <section className="section_I">
      <center class="container__in section__article">
        <Langages img={Image} />
        <Langages img={Image}></Langages>
        <Langages img={Image}></Langages>
      </center>
    </section>
  );
};

export default Section;