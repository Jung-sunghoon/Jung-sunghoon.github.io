import React, { useState } from 'react'
import styles from './header.module.css'
import { Link, useLocation } from 'react-router-dom'
import { CloseOutlined, MenuOutlined } from '@ant-design/icons'

const Header: React.FC = () => {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const handleMenuClick = () => {
    setOpen(false)
  }

  const handleMobileMenuToggle = () => {
    setOpen(!open)
  }

  // 메뉴 항목들을 배열로 정의
  const menuItems = [
    { id: 1, path: '/aboutme', label: 'About me' },
    { id: 2, path: '/blogs', label: 'Blog' },
    { id: 3, path: '/projects', label: 'Projects' },
    { id: 4, path: '/calendar', label: 'Calendar' },
  ]
  console.log(location.pathname, 'location.pathname')

  return (
    <header
      id={styles.header}
      className={`${
        location.pathname === '/' ? styles.mainHeader : styles.styleHeader
      }`}
    >
      <div className={styles.headerMenuNav}>
        <div className={styles.headerLogo}>
          <Link to="/" className={`${styles.headerLink}`}>
            JSH's Portfolio
          </Link>
        </div>
        {open ? (
          <CloseOutlined
            className={`${styles.headerMobileMenu} ${styles.closeIcon}`}
            onClick={handleMobileMenuToggle}
          />
        ) : (
          <MenuOutlined
            className={`${styles.headerMobileMenu} ${styles.menuIcon}`}
            onClick={handleMobileMenuToggle}
          />
        )}
        <ul
          className={open ? styles.headerMenuInnerOpen : styles.headerMenuInner}
        >
          {menuItems.map(menuItem => (
            <li key={menuItem.id} className={styles.headerMenu}>
              <Link
                to={menuItem.path}
                className={`${styles.headerLink} ${
                  location.pathname === menuItem.path ? styles.selected : ''
                }`}
                onClick={handleMenuClick}
              >
                {menuItem.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Header
