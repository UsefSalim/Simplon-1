import React from 'react';
import { NavLink } from 'react-router-dom'
const Navigation = () => {
  return (
    < nav >
      <div className="container__in">
        <div className="nav__logo">
          <p><span className="nav__logo__span">Responsive&ensp;</span><span>Web Design</span></p>
        </div>
        <div className="nav__items">
          <NavLink exact to="/" activeClassName="navActive">
            <span>Home</span>
          </NavLink>
          <NavLink exact to="/about" activeClassName="navActive">
            <span>About</span>
          </NavLink>
          <NavLink exact to="/service" activeClassName="navActive">
            <span>Service</span>
          </NavLink>
        </div>
      </div>
    </nav >
  )
};


{/* <NavLink exact to="/" activeClassName="navActive"> */ }
export default Navigation;