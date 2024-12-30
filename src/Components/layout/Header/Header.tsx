import React, { useEffect, useState } from 'react'
import styles from './header.module.css'
import { Link, useLocation } from 'react-router-dom'
import { CloseOutlined, MenuOutlined } from '@ant-design/icons'

const Header: React.FC = () => {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const [isScrolled, setIsScrolled] = useState(false)

  const handleMenuClick = () => {
    setOpen(false)
    window.scrollTo(0, 0)
  }

  const handleMobileMenuToggle = () => {
    setOpen(!open)
  }

  // 메뉴 항목들을 배열로 정의
  const menuItems = [
    { id: 1, path: '/aboutme', label: 'About me' },
    { id: 2, path: '/blogs', label: 'Blog' },
    { id: 3, path: '/projects', label: 'Projects' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 5) // 50px 이상 스크롤 시 배경 투명도 조정
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      id={styles.header}
      className={`${styles.header} ${
        location.pathname === '/' ? styles.mainHeader : styles.styleHeader
      } ${isScrolled ? styles.scrolled : ''}`}
    >
      <div className={styles.headerMenuNav}>
        <div className={styles.headerLogo}>
          <Link
            to="/"
            className={`${styles.headerLink}`}
            onClick={handleMenuClick}
          >
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
