import { Routes, Route } from 'react-router-dom';
import EmailLoginModal from '../components/Modal/EmailLoginModal';
import LoginRegisterModal from '../components/Modal/LoginRegisterModal';
import AuthLayout from '../layout/auth/AuthLayout';
import HomeLayout from '../layout/auth/HomeLayout';
import AccountPage from '../pages/AccountPage';
import ConfirmPaymentPage from '../pages/ConfirmPaymentPage';
import HomePage from '../pages/HomePage';
import WhitelistPage from '../pages/WhitelistPage';

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/account" element={<AccountPage />}></Route>
          <Route path="/whitelist" element={<WhitelistPage />}></Route>
          <Route path="/login" element={<LoginRegisterModal />}></Route>
          <Route path="/loginEmail" element={<EmailLoginModal />}></Route>
          <Route
            path="/confirmPayment"
            element={<ConfirmPaymentPage />}
          ></Route>
        </Route>
      </Routes>
    </>
  );
}

export default Router;
