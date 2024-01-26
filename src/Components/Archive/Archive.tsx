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
      '<p><b>소스 코드 저장소</b>입니다.</p><p>과거 프로젝트 및 코딩 학습을 위한 코드가 있습니다.</p>',
  },
  {
    img: img['velogimg'],
    alt: 'velogImg',
    link: 'https://velog.io/@jsh_0218/posts',
    url: 'velog.io/@jsh_0218/posts',
    description:
      '<p><b>기술 블로그</b>입니다.</p><p>프로젝트에 대한 회고를 작성하거나 개인적으로 공부한 것들을 정리해 둔 곳입니다.</p>',
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
