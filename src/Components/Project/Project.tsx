import styles from '@src/pages/Projects/projects.module.css'
import { Button, Drawer } from 'antd'
import { useState } from 'react'
import Readme from '../Readme/Readme'
import './project.css'
import Slider from 'react-slick' // react-slick 라이브러리 추가
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'

export interface ProjectsProp {
  title: string
  date: string
  imgs?: any[]
  description: string
  skill: string
  url?: string
  github: string
  frontend: string
  backend: string
  database: string
  deployment?: string
}

export const Project: React.FC<
  ProjectsProp & { readTitle: string; readDescription: string }
> = ({
  title,
  imgs,
  url,
  description,
  date,
  skill,
  github,
  frontend,
  backend,
  database,
  deployment,
  readTitle,
  readDescription,
}) => {
  const [open, setOpen] = useState(false)
  const [slideIndex, setSlideIndex] = useState(0)

  console.log(slideIndex)

  const CustomNextArrow: React.FC<any> = props => {
    const { onClick } = props
    return <RightOutlined className={styles.nextArrow} onClick={onClick} />
  }

  // Prev 버튼 컴포넌트
  const CustomPrevArrow: React.FC<any> = props => {
    const { onClick } = props
    return <LeftOutlined className={styles.prevArrow} onClick={onClick} />
  }

  // slick-carousel의 설정값
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index: number) => setSlideIndex(index), // 슬라이더 이동 후 인덱스 설정
    nextArrow: <CustomNextArrow />, // 사용자 정의 Next 버튼 추가
    prevArrow: <CustomPrevArrow />,
  }

  return (
    <>
      <div className={styles.projectDescription}>
        <div className={styles.descriptionTitle}>{title}</div>
        <div className={styles.descriptionDate}>{date}</div>
        <div className={styles.descriptionContents}>
          <div className={styles.descriptionImgSection}>
            {/* 이미지 슬라이더 추가 */}
            <Slider {...sliderSettings}>
              {imgs?.map((img, index) => (
                <img key={index} src={img} alt={`project-img-${index}`} />
              ))}
            </Slider>
          </div>
          <div className={styles.descriptionTextSection}>
            <div
              className={styles.descriptionText}
              dangerouslySetInnerHTML={{ __html: description }}
            ></div>
            <div className={styles.descriptionModal}>
              <Button type="primary" onClick={() => setOpen(true)}>
                README 보기
              </Button>
              <Drawer
                title={<div className={styles.readMeTitle}>README.md</div>}
                placement="top"
                width="100%"
                height="100%"
                onClose={() => setOpen(false)}
                open={open}
              >
                <Readme
                  readTitle={readTitle}
                  readDescription={readDescription}
                />
              </Drawer>
            </div>
            <div className={styles.projectInfo}>
              <div className={styles.infoTitle}>주요 기능</div>
              <div className={styles.infoText}>{skill}</div>
            </div>
            <div className={styles.projectInfo}>
              <div className={styles.infoTitle}>URL</div>
              <div className={styles.infoText}>{url}</div>
            </div>
            <div className={styles.projectInfo}>
              <div className={styles.infoTitle}>Github</div>
              <div
                className={styles.infoText}
                dangerouslySetInnerHTML={{ __html: github }}
              ></div>
            </div>
            <div className={styles.projectInfo}>
              <div className={styles.infoTitle}>Frontend</div>
              <div className={styles.infoText}>{frontend}</div>
            </div>
            <div className={styles.projectInfo}>
              <div className={styles.infoTitle}>Backend</div>
              <div className={styles.infoText}>{backend}</div>
            </div>
            <div className={styles.projectInfo}>
              <div className={styles.infoTitle}>Database</div>
              <div className={styles.infoText}>{database}</div>
            </div>
            <div className={styles.projectInfo}>
              <div className={styles.infoTitle}>Deployment</div>
              <div className={styles.infoText}>{deployment}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Project
