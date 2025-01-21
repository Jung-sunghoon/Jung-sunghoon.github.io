import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Layout from './Components/layout/Layout'
import Blogs from './pages/Blog/Blogs'
import Projects from './pages/Projects/Projects'
import Aboutme from './pages/Aboutme/Aboutme'
import Comming from './pages/Comming/Comming'
import Calendar from './pages/Calendar/Calendar'
import Create from './pages/Blog/Create'
import BlogDetails from './pages/Blog/BlogDetails'
import Admin from './pages/Admin/Admin'
import { useEffect } from 'react'
// 구글 애널리틱스 사용
import ReactGA from 'react-ga'
import Resume from './pages/Resume/Resume'

const googleTag = import.meta.env.VITE_GOOGLE_TAG // 환경 변수에 저장된 추적ID 가져오기
if (googleTag) {
  ReactGA.initialize(googleTag, { debug: true }) // react-ga 초기화 및 debug 사용
}
ReactGA.pageview(window.location.pathname) // 추적하려는 page 설정

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

const App = () => {
  return (
    <>
      <Layout>
        <ScrollToTop />
        <Routes>
          <Route path="/admin/*" element={<Admin />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogdetails/:post_id" element={<BlogDetails />} />
          <Route path="/create/*" element={<Create />} />
          <Route path="/edit/*" element={<Create />} />
          {/* <Route path="/aboutme/*" element={<Aboutme />} /> */}
          <Route path="/aboutme/*" element={<Resume />} />
          <Route path="/calendar/*" element={<Calendar />} />
          <Route path="/projects/*" element={<Projects />} />
          <Route path="/" element={<Comming />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
