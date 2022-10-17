import { Routes, Route } from 'react-router-dom';
import EmailLoginModal from '../components/Modal/EmailLoginModal';
import LoginRegisterModal from '../components/Modal/LoginRegisterModal';
import PrivacyTypeContainer from '../feature/create-host/PrivacyTypeContainer';
import PropertyTypeContainer from '../feature/create-host/PropertyTypeContainer';
import TypeGroupContainer from '../feature/create-host/TypeGroupContainer';
import AuthLayout from '../layout/auth/AuthLayout';
import HomeLayout from '../layout/auth/HomeLayout';
import MainContainer from '../layout/container/MainContainer';
import AccountPage from '../pages/AccountPage';
import ConfirmPaymentPage from '../pages/ConfirmPaymentPage';
import CreateHostPage from '../pages/CreateHostPage';
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
          <Route path="confirmPayment" element={<ConfirmPaymentPage />}></Route>
        </Route>
        <Route path="/create-host">
          <Route path="intro" element={<CreateHostPage />}></Route>
          <Route
            path="property-type-group"
            element={<TypeGroupContainer />}
          ></Route>
          <Route
            path="property-type/:id"
            element={<PropertyTypeContainer />}
          ></Route>
          <Route
            path="privacy-type/:id"
            element={<PrivacyTypeContainer />}
          ></Route>
          <Route path="location/:id" element={<CreateHostPage />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default Router;
