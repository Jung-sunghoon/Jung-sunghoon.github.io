import React from 'react'
import img from '@src/assets/img'

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
    <div className="AboutMe__SkillsSection__Contents">
      <div className="AboutMe__SkillsSection__Techstacks__Title">{title}</div>
      <div className="AboutMe__SkillsSection__Techstacks__Img__Wrraper">
        {imgs.map((img, index) => (
          <img
            key={index}
            className="AboutMe__SkillsSection__Techstacks__Img"
            src={img}
            alt={alt}
          />
        ))}
      </div>
    </div>
  )
}

export default Techstack
