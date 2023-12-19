import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Component/layout/Layout'
import Blog from './pages/Blog/Blog'
import Projects from './pages/Projects/Projects'
import Introduce from './pages/Introduce/Introduce'
import Comming from './pages/Comming/Comming'

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/blog/*" element={<Blog />} />
          <Route path="/introduce/*" element={<Introduce />} />
          <Route path="/projects/*" element={<Projects />} />
          <Route path="/" element={<Comming />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
