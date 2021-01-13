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

const Article = () => {
  return (
    <article>
      <h4>Web DesignE</h4>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi facere, consequuntur dolorum porro
            </p>
      <p>Pricing $11100- 3000$</p>
    </article>
  );
};
const Section = () => {
  return (
    <section className="section_S">
      <div className="container__in">
        <div className="section__part1">
          <h3>Services</h3>
          <Article></Article>
          <Article></Article>
          <Article></Article>
        </div>
        <Form />
      </div>
    </section>
  );
};

export default Section;