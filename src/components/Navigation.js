import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <div className='navigation'>
    <NavLink className='navlink' to="/" activeClassName="is-active" exact={true}>Weather</NavLink>
    <NavLink className='navlink' to="/about" activeClassName="is-active">About</NavLink>
  </div>
);

export default Navigation;