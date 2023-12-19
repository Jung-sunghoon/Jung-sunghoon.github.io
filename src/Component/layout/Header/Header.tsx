import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'

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
          <Link to="/aboutme" className="h__link">
            About me
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
        <li className="h__menu">
          <Link to="/calendar" className="h__link">
            Calendar
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
