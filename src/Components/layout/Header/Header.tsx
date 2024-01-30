import React, { useEffect, useState } from 'react'
import styles from './header.module.css'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
  const storedSelectedMenu = sessionStorage.getItem('selectedMenu')
  const [selectedMenu, setSelectedMenu] = useState<number | null>(
    storedSelectedMenu ? parseInt(storedSelectedMenu, 10) : null,
  )

  const handleMenuClick = (menuId: number) => {
    setSelectedMenu(menuId)
  }

  useEffect(() => {
    // selectedMenu가 변경될 때 sessionStorage에 저장하기
    if (selectedMenu !== null) {
      sessionStorage.setItem('selectedMenu', selectedMenu.toString())
    }
  }, [selectedMenu])

  // 메뉴 항목들을 배열로 정의
  const menuItems = [
    { id: 1, path: '/aboutme', label: 'About me' },
    { id: 2, path: '/blogs', label: 'Blog' },
    { id: 3, path: '/projects', label: 'Projects' },
    { id: 4, path: '/calendar', label: 'Calendar' },
  ]

  return (
    <header id={styles.header}>
      <div className={styles.headerMenuNav}>
        <div className={styles.headerLogo}>JSH's Portfolio</div>
        <ul className={styles.headerMenuInner}>
          {menuItems.map(menuItem => (
            <li key={menuItem.id} className={styles.headerMenu}>
              <Link
                to={menuItem.path}
                className={`${styles.headerLink} ${
                  selectedMenu === menuItem.id ? styles.selected : ''
                }`}
                onClick={() => handleMenuClick(menuItem.id)}
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
