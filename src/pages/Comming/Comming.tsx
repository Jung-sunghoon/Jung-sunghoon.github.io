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
          <div className={styles.commingDescription}>
            안녕하세요.
            <br />
            끊임없는 학습과 열정으로 성장 중인 신입 프론트엔드 개발자입니다.
            <br />
            <br />
            창의성을 존중하면서도 협업을 중시하는 스타일을 가지고 있어
            <br />
            다른 사람의 아이디어를 받아들이고, 그것을 발전시키는 과정에서
            즐거움을 느낍니다.
            <br />
            <br />
            팀과 함께하면 더 나은 결과물을 만들어갈 수 있다고 믿기 때문에 다양한
            아이디어와 의견을 존중하며 성장하는 과정을 소중히 여깁니다.
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comming
