import styles from '@src/pages/Projects/projects.module.css'
import { Button, Drawer } from 'antd'
import { useState } from 'react'
import Readme from '../Readme/Readme'
import './project.css'

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

export const Project: React.FC<ProjectsProp> = ({
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
}) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div className={styles.projectDescription}>
        <div className={styles.descriptionTitle}>{title}</div>
        <div className={styles.descriptionDate}>{date}</div>
        <div className={styles.descriptionContents}>
          <div className={styles.descriptionImgSection}>{imgs}</div>
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
                closeIcon={null}
                title={<div className={styles.readMeTitle}>README.md</div>}
                placement="top"
                width="100%"
                height="100%"
                onClose={() => setOpen(false)}
                open={open}
              >
                <Readme />
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
