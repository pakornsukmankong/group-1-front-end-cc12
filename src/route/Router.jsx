import { Routes, Route } from 'react-router-dom';
import ReserveComponent from '../components/ReserveComponent';
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
				<Route path='/' element={<HomeLayout />}>
					<Route path='/' element={<HomePage />} />
				</Route>
				<Route path='/' element={<AuthLayout />}>
					<Route path='/account' element={<AccountPage />} />
					<Route path='/whitelist' element={<WhitelistPage />} />
					<Route path='/confirmPayment' element={<ConfirmPaymentPage />} />
					<Route path='/reserve' element={<ReserveComponent />} />
				</Route>
			</Routes>
		</>
	);
}

export default Router;
