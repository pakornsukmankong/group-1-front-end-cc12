import { Routes, Route } from 'react-router-dom';
import AuthLayout from '../layout/auth/AuthLayout';
import HomeLayout from '../layout/auth/HomeLayout';
import AccountPage from '../pages/AccountPage';
import HomePage from '../pages/HomePage';

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
        <Route path="/" element={<AuthLayout />}>
          <Route path="/account" element={<AccountPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default Router;
