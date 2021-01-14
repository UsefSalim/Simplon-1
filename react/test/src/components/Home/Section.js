import React from 'react';

import html from '../../images/html5.png'
import css from '../../images/css.png'
import js from '../../images/js.jpg'

const Langages = ({ img, title, children }) => {
  return (
    <article>
      <img src={img} alt="" />
      <h3>{title}</h3>
      <p>{children}
      </p>
    </article>
  );
};
const Section = () => {
  return (
    <section className="section_I">
      <center class="container__in section__article">
        <Langages img={html} title="Html5" > HTML Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, vel.consectetur adipisicing elit.
      Dolorem, vel.</Langages>
        <Langages img={css} title="CSS">CSS Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, vel.consectetur adipisicing elit.
      Dolorem, vel.</Langages>
        <Langages img={js} title="Js"> JavaScript Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, vel.consectetur adipisicing elit.
      Dolorem, vel.</Langages>
      </center>
    </section>
  );
};

export default Section;