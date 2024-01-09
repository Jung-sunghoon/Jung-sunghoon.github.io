import Footer from './Footer/Footer'
import Header from './Header/Header'

const Layout = ({ children }: any) => {
  return (
    <div>
      <Header />

      <main>{children}</main>

      <Footer />
    </div>
  )
}

export default Layout
