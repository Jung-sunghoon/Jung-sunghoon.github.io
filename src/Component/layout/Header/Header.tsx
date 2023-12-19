import React from "react";
// import { Link } from "react-router-dom";
import "./header.css";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header id="header">
      <ul className="h__menu__inner">
        <li className="h__menu">
          <Link to="/blog" className="h__link">
            Blog
          </Link>
        </li>
        <li className="h__menu">
          <Link to="/introduce" className="h__link">
            Introduce
          </Link>
        </li>
        <li className="h__menu">
          <Link to="/projects" className="h__link">
            Projects
          </Link>
        </li>
        <li className="h__menu">
          <Link
            to="https://github.com/Jung-sunghoon"
            target="_blank"
            className="h__link"
          >
            Github
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
