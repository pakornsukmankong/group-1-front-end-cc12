import { Routes, Route } from 'react-router-dom'
import AuthLayout from '../layout/auth/AuthLayout'
import HomeLayout from '../layout/auth/HomeLayout'
import AccountPage from '../pages/AccountPage'
import ConfirmPaymentPage from '../pages/ConfirmPaymentPage'
import HomePage from '../pages/HomePage'
import RoomPage from '../pages/RoomPage'
import WhitelistPage from '../pages/WhitelistPage'

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
        <Route path="/" element={<HomeLayout />}>
          <Route path="/account" element={<AccountPage />} />
          <Route path="/whitelist" element={<WhitelistPage />} />
          <Route path="/confirmPayment" element={<ConfirmPaymentPage />} />
          <Route path="/rooms" element={<RoomPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default Router
