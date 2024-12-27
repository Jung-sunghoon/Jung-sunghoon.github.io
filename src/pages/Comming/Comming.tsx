import styles from './comming.module.css'

const Comming: React.FC = () => {
  return (
    <div id={styles.comming}>
      <div className={styles.commingWrapper}>
        <div className={styles.commingContents}>
          <div className={styles.commingTitle}>
            지속적인 성장을 꿈꾸는 프론트엔드 개발자 정성훈입니다.
          </div>
          <div className={styles.commingDescription}></div>
        </div>
        <div className={styles.recentBlogs}></div>
      </div>
    </div>
  )
}

export default Comming
