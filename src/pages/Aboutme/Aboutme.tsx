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
import frontendImg from '@src/assets/img/skillImg/frontendImg.png'
import backendImg from '@src/assets/img/skillImg/backendImg.png'
import deploymentImg from '@src/assets/img/skillImg/deploymentImg.png'
import versionControllImg from '@src/assets/img/skillImg/versionControllImg.png'
import githubImg from '@src/assets/img/skillImg/github.png'

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
          </div>
          <div className="AboutMe__SkillsSection__Container">
            <div className="AboutMe__SkillsSection__Contents">
              <div className="AboutMe__SkillsSection__Techstacks__Title">
                Frontend
              </div>
              <img
                className="AboutMe__SkillsSection__Techstacks__Img"
                src={frontendImg}
                alt={frontendImg}
              />
            </div>
            <div className="AboutMe__SkillsSection__Contents">
              <div className="AboutMe__SkillsSection__Techstacks__Title">
                Backend
              </div>
              <img
                className="AboutMe__SkillsSection__Techstacks__Img"
                src={backendImg}
                alt={backendImg}
              />
            </div>
            <div className="AboutMe__SkillsSection__Contents">
              <div className="AboutMe__SkillsSection__Techstacks__Title">
                Versoin Controll
              </div>
              <img
                className="AboutMe__SkillsSection__Techstacks__Img"
                src={versionControllImg}
                alt={versionControllImg}
              />
            </div>
            <div className="AboutMe__SkillsSection__Contents">
              <div className="AboutMe__SkillsSection__Techstacks__Title">
                Deployment
              </div>
              <img
                className="AboutMe__SkillsSection__Techstacks__Img"
                src={deploymentImg}
                alt={deploymentImg}
              />
            </div>
            <div className="AboutMe__SkillsSection__Contents">
              <div className="AboutMe__SkillsSection__Techstacks__Title">
                Communication
              </div>
              {/* <img className="AboutMe__SkillsSection__Techstacks__Img" src={frontendImg} alt={frontendImg} /> */}
            </div>
            <div className="AboutMe__SkillsSection__Contents">
              <div className="AboutMe__SkillsSection__Techstacks__Title">
                Certificate
              </div>
              {/* <img className="AboutMe__SkillsSection__Techstacks__Img" src={frontendImg} alt={frontendImg} /> */}
            </div>
          </div>
        </div>
      </article>
      <article className="Aboutme__Archive">
        <div className="Aboutme__ArchiveSection">
          <div className="Aboutme__ArchiveSection__Title">
            <div className="Aboutme__ArchiveSection__Title__Text">Archive</div>
          </div>
          <div className="Aboutme__ArchiveSection__Contents">
            <a
              href="https://github.com/Jung-sunghoon"
              className="Aboutme__ArchiveSection__Contents__Container"
              target="_blank"
            >
              <div className="Aboutme__ArchiveSection__Contents__Img__Wrapper">
                <img
                  src={githubImg}
                  alt={githubImg}
                  className="Aboutme__ArchiveSection__Contents__Img"
                ></img>
              </div>
              <div className="Aboutme__ArchiveSection__Contents__Url">
                github.com/Jung-sunghoon
              </div>
              <div className="Aboutme__ArchiveSection__Contents__Description">
                <p>
                  <b>소스 코드 저장소</b>입니다.
                </p>
                <p>과거 프로젝트 및 코딩 학습을 위한 코드가 있습니다.</p>
              </div>
            </a>
          </div>
        </div>
      </article>
    </div>
  )
}

export default Aboutme
