import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Components/layout/Layout'
import Blogs from './pages/Blog/Blogs'
import Projects from './pages/Projects/Projects'
import Aboutme from './pages/Aboutme/Aboutme'
import Comming from './pages/Comming/Comming'
import Calendar from './pages/Calendar/Calendar'
import Create from './pages/Blog/Create'
import BlogDetails from './pages/Blog/BlogDetails'

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/blogs/*" element={<Blogs />} />
          <Route path="/blogdetails/:post_id" element={<BlogDetails />} />
          <Route path="/create/*" element={<Create />} />
          <Route path="/aboutme/*" element={<Aboutme />} />
          <Route path="/calendar/*" element={<Calendar />} />
          <Route path="/projects/*" element={<Projects />} />
          <Route path="/" element={<Comming />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
