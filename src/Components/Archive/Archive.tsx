import React from 'react'
import styles from '@src/pages/Aboutme/aboutme.module.css'
import img from '@src/assets/img/index'

export interface ArchiveProps {
  img: any
  alt: string
  link: string
  url: string
  description: string
}

export const ArchiveData = [
  {
    img: img['aghimg'],
    alt: 'agithubImg',
    link: 'https://github.com/Jung-sunghoon',
    url: 'github.com/Jung-sunghoon',
    description:
      '<p><b>소스 코드 저장소</b>입니다.</p><p>프로젝트 및 코딩 학습을 위한 코드가 있습니다.</p>',
  },
]

export const Archive: React.FC<ArchiveProps> = ({
  img,
  alt,
  link,
  url,
  description,
}) => {
  return (
    <div className={styles.archiveContainer}>
      <div className={styles.archiveContents}>
        <a href={link} target="_blank">
          <div className={styles.archiveImgWrapper}>
            <img src={img} alt={alt} className={styles.archiveImg}></img>
          </div>
          <div className={styles.archiveUrl}>{url}</div>
          <div
            className={styles.archiveDescription}
            dangerouslySetInnerHTML={{ __html: description }}
          ></div>
        </a>
      </div>
    </div>
  )
}

export default Archive
