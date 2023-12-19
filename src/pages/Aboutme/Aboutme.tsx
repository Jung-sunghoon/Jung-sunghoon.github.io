import React from 'react'
import './aboutme.css'
import {
  UserOutlined,
  PhoneOutlined,
  GiftOutlined,
  BankOutlined,
  EnvironmentOutlined,
  MailOutlined,
} from '@ant-design/icons'

const Aboutme: React.FC = () => {
  return (
    <div id="aboutme">
      <article className="AboutMe__AboutMe">
        <div className="AboutMe__AboutMeSection">
          <div className="AboutMe__AboutMeSection__Title">
            <div className="AboutMe__AboutMeSection__Title__Text">About Me</div>
          </div>
          <div className="AboutMe__Infos">
            <div className="AboutMe__Info__Wrapper">
              <div className="AboutMe__Info">
                <div className="AboutMe__Info__Icon">
                  <UserOutlined className="AboutMe__Info__Icon__img" />
                </div>
                <div className="AboutMe__Info__Field">
                  <div className="AboutMe__Info__Label">이름</div>
                  <div className="AboutMe__Info__Value">정성훈</div>
                </div>
              </div>
            </div>
            <div className="AboutMe__Info__Wrapper">
              <div className="AboutMe__Info">
                <div className="AboutMe__Info__Icon">
                  <GiftOutlined className="AboutMe__Info__Icon__img" />
                </div>
                <div className="AboutMe__Info__Field">
                  <div className="AboutMe__Info__Label">생년월일</div>
                  <div className="AboutMe__Info__Value">2000.02.18</div>
                </div>
              </div>
            </div>
            <div className="AboutMe__Info__Wrapper">
              <div className="AboutMe__Info">
                <div className="AboutMe__Info__Icon">
                  <EnvironmentOutlined className="AboutMe__Info__Icon__img" />
                </div>
                <div className="AboutMe__Info__Field">
                  <div className="AboutMe__Info__Label">주소지</div>
                  <div className="AboutMe__Info__Value">경기도 화성시 능동</div>
                </div>
              </div>
            </div>
            <div className="AboutMe__Info__Wrapper">
              <div className="AboutMe__Info">
                <div className="AboutMe__Info__Icon">
                  <PhoneOutlined className="AboutMe__Info__Icon__img" />
                </div>
                <div className="AboutMe__Info__Field">
                  <div className="AboutMe__Info__Label">연락처</div>
                  <div className="AboutMe__Info__Value">010-4252-7897</div>
                </div>
              </div>
            </div>
            <div className="AboutMe__Info__Wrapper">
              <div className="AboutMe__Info">
                <div className="AboutMe__Info__Icon">
                  <MailOutlined className="AboutMe__Info__Icon__img" />
                </div>
                <div className="AboutMe__Info__Field">
                  <div className="AboutMe__Info__Label">이메일</div>
                  <div className="AboutMe__Info__Value">
                    jsh0218131@gmail.com
                  </div>
                </div>
              </div>
            </div>
            <div className="AboutMe__Info__Wrapper">
              <div className="AboutMe__Info">
                <div className="AboutMe__Info__Icon">
                  <BankOutlined className="AboutMe__Info__Icon__img" />
                </div>
                <div className="AboutMe__Info__Field">
                  <div className="AboutMe__Info__Label">학력</div>
                  <div className="AboutMe__Info__Value">
                    한신대학교 <br></br>
                    (컴퓨터공학부)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
      <article className="AboutMe__Skills">
        <div className="AboutMe__SkillsSection">
          <div className="AboutMe__SkillsSection__Title">
            <div className="AboutMe__SkillsSection__Title__Text">Skills</div>
            <div>Frontend</div>
            <div>Version Control</div>
          </div>
        </div>
      </article>
    </div>
  )
}

export default Aboutme
