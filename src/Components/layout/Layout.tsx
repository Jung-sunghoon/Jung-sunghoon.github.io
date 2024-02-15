import Footer from './Footer/Footer'
import Header from './Header/Header'

const Layout = ({ children }: any) => {
  return (
    <div>
      <Header />

      <main style={{ marginBottom: '0' }}>{children}</main>

      <Footer />
    </div>
  )
}

export default Layout
