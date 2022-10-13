import { Outlet } from 'react-router-dom'
import Container from '../container/Container'
import Footer from '../footer/Footer'
import Header from '../header/Header'

function AuthLayout() {
  return (
    <>
      <div className="min-h-screen">
        <Header />
        <Container>
          <Outlet />
        </Container>
      </div>
      <Footer />
    </>
  )
}

export default AuthLayout
