import React from 'react'
import styles from './comming.module.css'

const Comming: React.FC = () => {
  return (
    <div id={styles.comming}>
      <div className={styles.commingWrapper}>
        <div className={styles.commingContents}>
          <div className={styles.commingTitle}>
            정성훈
            <br />
            프론트엔드 개발자 포트폴리오
          </div>
          <div className={styles.commingDescription}></div>
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default Comming
