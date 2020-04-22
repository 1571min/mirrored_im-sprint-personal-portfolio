// @flow
import * as React from 'react';
import { NavLink } from 'react-router-dom';
export const Nav = (props) => {
  const activeStyle = {
    color: '#ffa601',
    fontSize: '125%',
  };
  return (
    <nav className="box header">
      <ul className="menu-list">
        <li className="menu">
          <NavLink to="/home" activeStyle={activeStyle}>
            Home
          </NavLink>
        </li>
        <li className="menu">
          <NavLink to="/about" activeStyle={activeStyle}>
            About
          </NavLink>
        </li>
        <li className="menu">
          <NavLink to="/portfolio" activeStyle={activeStyle}>
            Portfolio
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
