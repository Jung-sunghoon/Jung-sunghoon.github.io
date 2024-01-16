import React from 'react'
import {
  UserOutlined,
  PhoneOutlined,
  GiftOutlined,
  BankOutlined,
  EnvironmentOutlined,
  MailOutlined,
} from '@ant-design/icons'

export interface InfoItemProps {
  label: string
  value: string
  icon: React.ReactNode
}

export const infoData: InfoItemProps[] = [
  {
    label: '이름',
    value: '정성훈',
    icon: <UserOutlined className="AboutMe__Info__Icon__img" />,
  },
  {
    label: '생년월일',
    value: '2000.02.18',
    icon: <GiftOutlined className="AboutMe__Info__Icon__img" />,
  },
  {
    label: '주소지',
    value: '경기도 화성시 능동',
    icon: <EnvironmentOutlined className="AboutMe__Info__Icon__img" />,
  },
  {
    label: '연락처',
    value: '010-4252-7897',
    icon: <PhoneOutlined className="AboutMe__Info__Icon__img" />,
  },
  {
    label: '이메일',
    value: 'jsh0218131@gmail.com',
    icon: <MailOutlined className="AboutMe__Info__Icon__img" />,
  },
  {
    label: '학력',
    value: '한신대학교 (컴퓨터공학부)',
    icon: <BankOutlined className="AboutMe__Info__Icon__img" />,
  },
]

export const Myinfo: React.FC<InfoItemProps> = ({ icon, label, value }) => {
  return (
    <div className="AboutMe__Info__Wrapper">
      <div className="AboutMe__Info">
        <div className="AboutMe__Info__Icon">{icon}</div>
        <div className="AboutMe__Info__Field">
          <div className="AboutMe__Info__Label">{label}</div>
          <div className="AboutMe__Info__Value">{value}</div>
        </div>
      </div>
    </div>
  )
}

export default Myinfo
