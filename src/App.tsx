import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Layout from './Components/layout/Layout'
import Blogs from './pages/Blog/Blogs'
import Projects from './pages/Projects/Projects'
import Aboutme from './pages/Aboutme/Aboutme'
import Comming from './pages/Comming/Comming'
import Calendar from './pages/Calendar/Calendar'
// import Create from './pages/Blog/Create'
import BlogDetails from './pages/Blog/BlogDetails'
import Admin from './pages/Admin/Admin'
import { useEffect } from 'react'

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
          <Route path="/blog" element={<Blogs />} />
          <Route path="/blogdetails/:post_id" element={<BlogDetails />} />
          {/* <Route path="/create/*" element={<Create />} /> */}
          {/* <Route path="/edit/*" element={<Create />} /> */}
          <Route path="/aboutme/*" element={<Aboutme />} />
          <Route path="/calendar/*" element={<Calendar />} />
          <Route path="/projects/*" element={<Projects />} />
          <Route path="/welcome" element={<Comming />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
