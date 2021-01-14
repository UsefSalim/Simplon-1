import React from 'react';
import '../../styles/css/service.css'
const Form = () => {
  return (
    <div className="section__part2">
      <h3>get A Quote</h3>
      <form action="">
        <label htmlFor="fname">Name</label><br />
        <input type="text" placeholder="Name" /><br />
        <label htmlFor="lname">Email</label><br />
        <input type="text" placeholder="Email" /><br />
        <label htmlFor="lname">Message</label><br />
        <textarea rows="2" cols="31"></textarea>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

const Article = ({ title, children, pricing }) => {
  return (
    <article>
      <h4>{title}</h4>
      <p>{children}</p>
      <p>Pricing  {pricing}</p>
    </article>
  );
};
const Section = () => {
  return (
    <section className="section_S">
      <div className="container__in">
        <div className="section__part1">
          <h3>Services</h3>
          <Article title="title1" pricing="$20000- 3000$">Article 1 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, ducimus?</Article>
          <Article title="title2" pricing="$11000- 3000$">Article 2 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, ducimus?</Article>
          <Article title="title3" pricing="$343232- 3000$">Article 3 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, ducimus?</Article>
        </div>
        <Form />
      </div>
    </section>
  );
};

export default Section;