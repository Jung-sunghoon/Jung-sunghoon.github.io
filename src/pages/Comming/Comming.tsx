import styles from './comming.module.css'

const Comming: React.FC = () => {
  return (
    <div id={styles.comming}>
      <div className={styles.commingContents}>
        <div className={styles.commingText}>
        오늘보다 더 나은 코드를 작성하는<br />
        프론트엔드 개발자, 정성훈입니다.
        </div>
      </div>
      <div className={styles.recentBlogs}></div>
    </div>
  )
}

export default Comming
