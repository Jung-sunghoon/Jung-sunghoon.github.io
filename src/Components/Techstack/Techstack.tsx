import React from 'react'
import img from '@src/assets/img'
import styles from '@src/pages/Aboutme/aboutme.module.css'

interface TechstackProps {
  title: string
  imgs: any[]
  alt: string
}

export const techstackData = [
  {
    title: 'Frontend',
    imgs: [img['htmlimg'], img['cssimg'], img['jsimg'], img['tsimg']],
    alt: 'Frontend_img',
  },
  {
    title: 'Backend',
    imgs: [img['nodeimg'], img['dbimg']],
    alt: 'Backend_img',
  },
  {
    title: 'Version Control',
    imgs: [img['gitimg'], img['ghimg']],
    alt: 'VersionControl_img',
  },
  { title: 'Deployment', imgs: [img['dockerimg']], alt: 'Deployment_img' },
  { title: 'Communication', imgs: [], alt: 'Communication_img' },
  { title: 'Certificate', imgs: [], alt: 'Certificate_img' },
]

export const Techstack: React.FC<TechstackProps> = ({ title, imgs, alt }) => {
  return (
    <div className={styles.Skills__Contents}>
      <div className={styles.Skills__Title}>{title}</div>
      <div className={styles.Skills__Img__Wrraper}>
        {imgs.map((img, index) => (
          <img key={index} className={styles.Skills__Img} src={img} alt={alt} />
        ))}
      </div>
    </div>
  )
}

export default Techstack
