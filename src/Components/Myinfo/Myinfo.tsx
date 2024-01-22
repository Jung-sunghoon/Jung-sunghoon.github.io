import React from 'react'
import {
  UserOutlined,
  PhoneOutlined,
  GiftOutlined,
  BankOutlined,
  EnvironmentOutlined,
  MailOutlined,
} from '@ant-design/icons'
import styles from '@src/pages/Aboutme/aboutme.module.css'

export interface InfoItemProps {
  label: string
  value: string
  icon: React.ReactNode
}

export const infoData: InfoItemProps[] = [
  {
    label: '이름',
    value: '정성훈',
    icon: <UserOutlined />,
  },
  {
    label: '생년월일',
    value: '2000.02.18',
    icon: <GiftOutlined />,
  },
  {
    label: '주소지',
    value: '경기도 화성시 능동',
    icon: <EnvironmentOutlined />,
  },
  {
    label: '연락처',
    value: '010-4252-7897',
    icon: <PhoneOutlined />,
  },
  {
    label: '이메일',
    value: 'jsh0218131@gmail.com',
    icon: <MailOutlined />,
  },
  {
    label: '학력',
    value: '한신대학교 (컴퓨터공학부)',
    icon: <BankOutlined />,
  },
]

export const Myinfo: React.FC<InfoItemProps> = ({ icon, label, value }) => {
  return (
    <div className={styles.Info__Wrapper}>
      <div className={styles.Info}>
        <div className={styles.Info__Icon}>{icon}</div>
        <div className={styles.Info__Field}>
          <div className={styles.Info__Label}>{label}</div>
          <div className={styles.Info__Value}>{value}</div>
        </div>
      </div>
    </div>
  )
}

export default Myinfo
