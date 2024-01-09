import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
  return (
    <header id="Header">
      <div className="H__Menu_Nav">
        <ul className="H__Menu__Inner">
          <li className="H__Menu">
            <Link to="/aboutme" className="H__Link">
              About me
            </Link>
          </li>
          <li className="H__Menu">
            <Link to="/blogs" className="H__Link">
              Blog
            </Link>
          </li>
          <li className="H__Menu">
            <Link to="/projects" className="H__Link">
              Projects
            </Link>
          </li>
          <li className="H__Menu">
            <Link to="/calendar" className="H__Link">
              Calendar
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
