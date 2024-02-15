import styles from './footer.module.css'

const Footer = () => {
  return (
    <footer id={styles.footer}>
      <div className={styles.footerText}>
        &copy; 2024. Jung Sung Hoon. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
