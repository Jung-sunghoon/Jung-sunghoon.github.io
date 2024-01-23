import styles from './readme.module.css'

export const Readme: React.FC = () => {
  return (
    <div id={styles.readMe}>
      <div id={styles.readMePortfolio}></div>
      <div id={styles.readMeDeople}>
        <div className={styles.readMeSummary}>
          <h2>요약</h2>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default Readme
