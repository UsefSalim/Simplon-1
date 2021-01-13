import React from 'react';

import Background from '../../images/coding-man.jpg';

var sectionStyle = {
  color: "white",
  height: "400px",
  backgroundImage: "url(" + { Background } + ")",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover"
};


const Header = () => {
  return (
    <header style={sectionStyle}>
      <center class="container__in">
        <h1>Lorem ipsum dolor sit amet consectetur </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse eos natus eius hic excepturi enim assumenda unde consectetur illo consequatur, voluptate dolorem, placeat aliquam velit.</p>
      </center>
    </header>);
}

  ;

export default Header;